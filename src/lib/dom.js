/**
 * 创建上传文件列表中的文件节点
 * @param {String} fileName
 * @return {HTMLElement}
 */
export function createFileItemNode(fileName) {
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