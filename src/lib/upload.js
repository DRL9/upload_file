import { inputFileBtn, submitBtn, fileListElement, fileSummaryElement } from './html-elements'
import { prefilling, emptyFn } from './utils'
import { createFileItemNode } from './dom'

var fileNames = [];
var fileList = [];

inputFileBtn.onchange = function (e) {
    var files = e.target.files;
    for (var i = 0; i < files.length; i++) {
        if (isFileRepeat(files[i].name))
            continue;
        addFiles(files[i]);
    }
}

submitBtn.onclick = function () {
    var formData = new FormData();

    fileList.forEach(function (file) {
        formData.append(file.name, file);
    })

    sendFormData(formData, {
        error: onUploadError,
        load: onUploadSuccess,
        loadstart: onloadstart,
        loadend: onUploadEnd,
        progress: onUploadProgress
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
 * @param {ProgressEvent} e
 */
function onUploadProgress(e) {

}

/**
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
        xhr.addEventListener(type, typeof handler === 'function' ? handler : emptyFn);
    });
    xhr.open('post', '/upload');
    xhr.send(formData);
}

/**
 *
 * @param {String} fileName
 */
function isFileRepeat(fileName) {
    return fileNames.indexOf(fileName) != -1;
}

/**
 *
 * @param {File} file
 */
function addFiles(file) {
    var li = createFileItemNode(file.name);
    var index = fileList.length;//该li插入到ul中的索引

    li.lastElementChild.firstElementChild.addEventListener('click', prefilling(function (i, ele) {
        fileListElement.removeChild(ele);
        fileList.splice(i, 1);
        onFileChange();
    }, index, li));
    fileListElement.appendChild(li);

    fileList.push(file);
    fileNames.push(file.name);
    onFileChange();
}

function onFileChange() {
    fileSummaryElement.innerText = `待上传文件数：${fileList.length}`;
}
onFileChange();
