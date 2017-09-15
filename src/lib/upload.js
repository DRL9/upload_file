import { inputFileBtn, submitBtn, fileListElement, fileSummaryElement } from './html-elements'
import { prefilling, emptyFn } from './utils'

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
        error: () => { console.error(err) },
        progress: (e) => { console.log((e.loaded * 100 / e.total).toFixed(0)) },
        load: (e) => { console.log(e) }
    });
}

/**
 *
 * @param {FormData} formData
 * @param {Object} [listeners={}] - XMLHttpRequest的事件监听器
 * @param {Function} [listeners.progress]
 * @param {Function} [listeners.load]
 * @param {Function} [listeners.error]
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
    var li = createListItem(file.name);
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

/**
 *
 * @param {String} fileName
 * @return {HTMLElement}
 */
function createListItem(fileName) {
    var li = document.createElement('li');
    li.innerHTML = `<span class="file-name">${fileName}</span>
                    <span>
                        <button class="btn-remove-file">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true">
                            </span>
                        </button>
                    </span>`;
    li.className = 'list-group-item';
    return li;
}

function onFileChange() {
    fileSummaryElement.innerText = `待上传文件数：${fileList.length}`;
}
onFileChange();
