/**
 * 创建上传文件列表中的文件节点
 * @param {String} fileName
 * @return {HTMLElement}
 */
export function createFileItemNode(fileName) {
    var li = document.createElement('li');
    li.innerHTML = `<div class="file-item">
                        <div>
                            <div class="file-name">${fileName}</div>
                            <div class="upload-status"></div>
                        </div>
                        <div class="upload-item-control">
                            <button class="btn-remove-file glyphicon glyphicon-remove" aria-hidden="true">
                            </button>
                        </div>
                    </div>`;
    li.className = 'list-group-item';
    return li;
}