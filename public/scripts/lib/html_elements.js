define([
], function () {
    'use strict';
    var elements = {
        inputFileBtn: document.getElementById('input-file'),
        submitBtn: document.getElementById('submit'),
        fileListElement: document.getElementById('file-list'),
        fileSummaryElement: document.getElementById('file-summary')
    };
    Object.freeze(elements);

    return elements;
});