/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nconst inputFileBtn = document.getElementById('input-file');\n/* harmony export (immutable) */ __webpack_exports__[\"inputFileBtn\"] = inputFileBtn;\n\nconst submitBtn = document.getElementById('submit');\n/* harmony export (immutable) */ __webpack_exports__[\"submitBtn\"] = submitBtn;\n\nconst fileListElement = document.getElementById('file-list');\n/* harmony export (immutable) */ __webpack_exports__[\"fileListElement\"] = fileListElement;\n\nconst fileSummaryElement = document.getElementById('file-summary');\n/* harmony export (immutable) */ __webpack_exports__[\"fileSummaryElement\"] = fileSummaryElement;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL2h0bWxfZWxlbWVudHMuanM/NWJkMSJdLCJuYW1lcyI6WyJpbnB1dEZpbGVCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnRuIiwiZmlsZUxpc3RFbGVtZW50IiwiZmlsZVN1bW1hcnlFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQU8sTUFBTUEsZUFBZUMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFyQjtBQUFBO0FBQUE7QUFDQSxNQUFNQyxZQUFZRixTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWxCO0FBQUE7QUFBQTtBQUNBLE1BQU1FLGtCQUFrQkgsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUF4QjtBQUFBO0FBQUE7QUFDQSxNQUFNRyxxQkFBcUJKLFNBQVNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBM0IsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlucHV0RmlsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maWxlJyk7XHJcbmV4cG9ydCBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbmV4cG9ydCBjb25zdCBmaWxlTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1saXN0Jyk7XHJcbmV4cG9ydCBjb25zdCBmaWxlU3VtbWFyeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1zdW1tYXJ5Jyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9saWIvaHRtbF9lbGVtZW50cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {\n    'use strict';\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnRUFBQSxpQ0FBTyxDQUNILHNCQURHLEVBRUgsc0JBRkcsQ0FBUCxrQ0FHRyxZQUFZO0FBQ1g7QUFFSCxDQU5EO0FBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXHJcbiAgICAnLi9saWIvdXBsb2FkJyxcclxuICAgICcuL2xpYi9odG1sX2VsZW1lbnRzJ1xyXG5dLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_elements__ = __webpack_require__(0);\n\n\nvar fileNames = [];\nvar fileList = [];\n\n__WEBPACK_IMPORTED_MODULE_0__html_elements__[\"inputFileBtn\"].onchange = function (e) {\n    var files = e.target.files;\n    for (var i = 0; i < files.length; i++) {\n        if (isFileRepeat(files[i].name)) continue;\n        addFiles(files[i]);\n    }\n};\n\n__WEBPACK_IMPORTED_MODULE_0__html_elements__[\"submitBtn\"].onclick = function () {\n    var formData = new FormData();\n    var xhr = new XMLHttpRequest();\n\n    fileList.forEach(function (file) {\n        formData.append(file.name, file);\n    });\n    xhr.open('post', '/upload');\n    xhr.onprogress = function (e) {\n        console.log((e.loaded * 100 / e.total).toFixed(0));\n    };\n    xhr.onload = function () {\n        alert(xhr.response);\n    };\n    xhr.onloadend = function () {};\n    xhr.onerror = function (err) {\n        console.error(err);\n    };\n    xhr.send(formData);\n};\n\n/**\r\n *\r\n * @param {String} fileName\r\n */\nfunction isFileRepeat(fileName) {\n    return fileNames.indexOf(fileName) != -1;\n}\n\n/**\r\n *\r\n * @param {File} file\r\n */\nfunction addFiles(file) {\n    var li = createListItem(file.name);\n    var index = fileList.length; //该li插入到ul中的索引\n\n    li.lastElementChild.firstElementChild.addEventListener('click', prefilling(function (i, ele) {\n        __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileListElement\"].removeChild(ele);\n        fileList.splice(i, 1);\n        onFileChange();\n    }, [index, li]));\n    __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileListElement\"].appendChild(li);\n\n    fileList.push(file);\n    fileNames.push(file.name);\n    onFileChange();\n}\n\n/**\r\n *\r\n * @param {String} fileName\r\n * @return {HTMLElement}\r\n */\nfunction createListItem(fileName) {\n    var li = document.createElement('li');\n    li.innerHTML = '<span class=\"file-name\">' + fileName + '</span>' + '<span><button class=\"btn-remove-file\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></span>';\n    li.className = 'list-group-item';\n    return li;\n}\n\n/**\r\n *\r\n * @param {Function} fn\r\n * @param {Array} args\r\n */\nfunction prefilling(fn, args) {\n    return function () {\n        fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));\n    };\n}\n\nfunction onFileChange() {\n    __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileSummaryElement\"].innerText = '待上传文件：' + fileList.length;\n}\nonFileChange();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL3VwbG9hZC5qcz82OTZkIl0sIm5hbWVzIjpbImZpbGVOYW1lcyIsImZpbGVMaXN0IiwiaW5wdXRGaWxlQnRuIiwib25jaGFuZ2UiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJpIiwibGVuZ3RoIiwiaXNGaWxlUmVwZWF0IiwibmFtZSIsImFkZEZpbGVzIiwic3VibWl0QnRuIiwib25jbGljayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZvckVhY2giLCJmaWxlIiwiYXBwZW5kIiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwibG9hZGVkIiwidG90YWwiLCJ0b0ZpeGVkIiwib25sb2FkIiwiYWxlcnQiLCJyZXNwb25zZSIsIm9ubG9hZGVuZCIsIm9uZXJyb3IiLCJlcnIiLCJlcnJvciIsInNlbmQiLCJmaWxlTmFtZSIsImluZGV4T2YiLCJsaSIsImNyZWF0ZUxpc3RJdGVtIiwiaW5kZXgiLCJsYXN0RWxlbWVudENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJlZmlsbGluZyIsImVsZSIsImZpbGVMaXN0RWxlbWVudCIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwib25GaWxlQ2hhbmdlIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiZm4iLCJhcmdzIiwiYXBwbHkiLCJjb25jYXQiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZpbGVTdW1tYXJ5RWxlbWVudCIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSxZQUFZLEVBQWhCO0FBQ0EsSUFBSUMsV0FBVyxFQUFmOztBQUVBLDREQUFBQyxDQUFhQyxRQUFiLEdBQXdCLFVBQVVDLENBQVYsRUFBYTtBQUNqQyxRQUFJ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U0FBM0IsQ0FBWixDQUFmO0FBQ0gsS0FGRDtBQUdIOztBQUVELFNBQVNmLFlBQVQsR0FBd0I7QUFDcEJnQixJQUFBLGtFQUFBQSxDQUFtQkMsU0FBbkIsR0FBK0IsV0FBV2pFLFNBQVNPLE1BQW5EO0FBQ0g7QUFDRHlDIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnB1dEZpbGVCdG4sIHN1Ym1pdEJ0biwgZmlsZUxpc3RFbGVtZW50LCBmaWxlU3VtbWFyeUVsZW1lbnQgfSBmcm9tICcuL2h0bWxfZWxlbWVudHMnXHJcblxyXG52YXIgZmlsZU5hbWVzID0gW107XHJcbnZhciBmaWxlTGlzdCA9IFtdO1xyXG5cclxuaW5wdXRGaWxlQnRuLm9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpc0ZpbGVSZXBlYXQoZmlsZXNbaV0ubmFtZSkpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGFkZEZpbGVzKGZpbGVzW2ldKTtcclxuICAgIH1cclxufVxyXG5cclxuc3VibWl0QnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICBmaWxlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpbGUubmFtZSwgZmlsZSk7XHJcbiAgICB9KVxyXG4gICAgeGhyLm9wZW4oJ3Bvc3QnLCAnL3VwbG9hZCcpO1xyXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKChlLmxvYWRlZCAqIDEwMCAvIGUudG90YWwpLnRvRml4ZWQoMCkpXHJcbiAgICB9XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFsZXJ0KHhoci5yZXNwb25zZSlcclxuICAgIH1cclxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZU5hbWVcclxuICovXHJcbmZ1bmN0aW9uIGlzRmlsZVJlcGVhdChmaWxlTmFtZSkge1xyXG4gICAgcmV0dXJuIGZpbGVOYW1lcy5pbmRleE9mKGZpbGVOYW1lKSAhPSAtMTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkRmlsZXMoZmlsZSkge1xyXG4gICAgdmFyIGxpID0gY3JlYXRlTGlzdEl0ZW0oZmlsZS5uYW1lKTtcclxuICAgIHZhciBpbmRleCA9IGZpbGVMaXN0Lmxlbmd0aDsvL+ivpWxp5o+S5YWl5YiwdWzkuK3nmoTntKLlvJVcclxuXHJcbiAgICBsaS5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJlZmlsbGluZyhmdW5jdGlvbiAoaSwgZWxlKSB7XHJcbiAgICAgICAgZmlsZUxpc3RFbGVtZW50LnJlbW92ZUNoaWxkKGVsZSk7XHJcbiAgICAgICAgZmlsZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIG9uRmlsZUNoYW5nZSgpO1xyXG4gICAgfSwgW2luZGV4LCBsaV0pKTtcclxuICAgIGZpbGVMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgZmlsZUxpc3QucHVzaChmaWxlKTtcclxuICAgIGZpbGVOYW1lcy5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICBvbkZpbGVDaGFuZ2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlTmFtZVxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKGZpbGVOYW1lKSB7XHJcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwiZmlsZS1uYW1lXCI+JyArIGZpbGVOYW1lICsgJzwvc3Bhbj4nXHJcbiAgICAgICAgKyAnPHNwYW4+PGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmUtZmlsZVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+PC9idXR0b24+PC9zcGFuPic7XHJcbiAgICBsaS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgIHJldHVybiBsaTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcclxuICovXHJcbmZ1bmN0aW9uIHByZWZpbGxpbmcoZm4sIGFyZ3MpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZpbGVDaGFuZ2UoKSB7XHJcbiAgICBmaWxlU3VtbWFyeUVsZW1lbnQuaW5uZXJUZXh0ID0gJ+W+heS4iuS8oOaWh+S7tu+8micgKyBmaWxlTGlzdC5sZW5ndGg7XHJcbn1cclxub25GaWxlQ2hhbmdlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9saWIvdXBsb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);