import { inputFileBtn, submitBtn, fileListElement, fileSummaryElement } from './html-elements'
import { prefilling, emptyFn, tranferNumberToPercentage, transferSizeHumanity } from './utils'
import { createFileItemNode } from './dom'
import { addTask, removeTask, isFileRepeat } from './task'

var uploadTaskList = [];

inputFileBtn.onchange = function (e) {
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
        if (isFileRepeat(uploadTaskList, files[i].name))
            continue;
        addFiles(files[i]);
    }
}

submitBtn.onclick = function () {
    uploadTaskList.forEach(({ id, file, element }) => {
        var formData = new FormData();
        formData.append(file.name, file);
        sendFormData(formData, {
            error: onUploadError,
            load: onUploadSuccess,
            loadstart: onloadstart,
            loadend: onUploadEnd,
            progress: prefilling(onUploadProgress, element)
        });
    });
}

/**
 * 上传出错
 * @param {ErrorEvent} e
 */
function onUploadError(e) {
    console.error(e.error);
}

/**
 *
 * @param {HTMLElement} element - 上传的文件在DOM中的元素
 * @param {ProgressEvent} e
 */
function onUploadProgress(element, e) {
    var completed = tranferNumberToPercentage(e.loaded / e.total);
    element.style.backgroundSize = `${completed} 100%`;
    var statusElement = element.getElementsByClassName('upload-status')[0];
    statusElement.innerHTML = `${completed}，已完成${transferSizeHumanity(e.loaded)}， 总共${transferSizeHumanity(e.total)}`;
}

/**
 *
 * @param {Event} e
 */
function onUploadStart(e) {

}

/**
 *
 * @param {Event} e
 */
function onUploadSuccess(e) {

}

/**
 * 上传结束后(无论成功与否)
 * @param {ProgressEvent} e
 */
function onUploadEnd(e) {

}

/**
 *
 * @param {FormData} formData
 * @param {Object} [listeners={}] - XMLHttpRequest的事件监听器
 * @param {Function} [listeners.progress]
 * @param {Function} [listeners.load]
 * @param {Function} [listeners.error]
 * @param {Function} [listeners.loadstart]
 * @param {Function} [listeners.loadend]
 */
function sendFormData(formData, listeners = {}) {
    var xhr = new XMLHttpRequest();

    //监听上传事件
    Object.keys(listeners).forEach((type) => {
        let handler = listeners[type];
        xhr.upload.addEventListener(type, typeof handler === 'function' ? handler : emptyFn);
    });
    xhr.open('post', '/upload');
    xhr.send(formData);
}

/**
 *
 * @param {File} file
 */
function addFiles(file) {
    var li = createFileItemNode(file.name);
    var uploadControlElement = li.getElementsByClassName('upload-item-control')[0]; //file-item的按钮控制元素
    var task = addTask(uploadTaskList, file, li);

    uploadControlElement.addEventListener('click', prefilling(function (task, event) {
        var targetClassList = Array.prototype.slice.call(event.target.classList);
        if (targetClassList.indexOf('btn-remove-file') >= 0) {
            fileListElement.removeChild(task.element);
            removeTask(uploadTaskList, task);

            onFileChange();
        }
    }, task));

    fileListElement.appendChild(li);

    onFileChange();
}

function onFileChange() {
    fileSummaryElement.innerText = `待上传文件数：${uploadTaskList.length}`;
}
onFileChange();
