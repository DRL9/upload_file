
define([
], function (require, factory) {
    'use strict';
    var inputFileBtn = document.getElementById('input-file');
    var submitBtn = document.getElementById('submit');
    var fileListElement = document.getElementById('file-list');
    var fileSummaryElement = document.getElementById('file-summary');
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
        var xhr = new XMLHttpRequest();

        fileList.forEach(function (file) {
            formData.append(file.name, file);
        })
        xhr.open('post', '/upload');
        xhr.onprogress = function (e) {

        }
        xhr.onload = function () {

        }
        xhr.onloadend = function () {

        }
        xhr.onerror = function () {

        }
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
        }, [index, li]));
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
        li.innerHTML = '<span class="file-name">' + fileName + '</span>'
            + '<span><button class="btn-remove-file"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></span>';
        li.className = 'list-group-item';
        return li;
    }

    /**
     *
     * @param {Function} fn
     * @param {Array} args
     */
    function prefilling(fn, args) {
        return function () {
            fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
        }
    }

    function onFileChange() {
        fileSummaryElement.innerText = '待上传文件：' + fileList.length;
    }
    onFileChange();
});
