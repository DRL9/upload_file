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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nconst inputFileBtn = document.getElementById('input-file');\n/* harmony export (immutable) */ __webpack_exports__[\"inputFileBtn\"] = inputFileBtn;\n\nconst submitBtn = document.getElementById('submit');\n/* harmony export (immutable) */ __webpack_exports__[\"submitBtn\"] = submitBtn;\n\nconst fileListElement = document.getElementById('file-list');\n/* harmony export (immutable) */ __webpack_exports__[\"fileListElement\"] = fileListElement;\n\nconst fileSummaryElement = document.getElementById('file-summary');\n/* harmony export (immutable) */ __webpack_exports__[\"fileSummaryElement\"] = fileSummaryElement;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2h0bWxfZWxlbWVudHMuanM/MjU3ZCJdLCJuYW1lcyI6WyJpbnB1dEZpbGVCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnRuIiwiZmlsZUxpc3RFbGVtZW50IiwiZmlsZVN1bW1hcnlFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQU8sTUFBTUEsZUFBZUMsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFyQjtBQUFBO0FBQUE7QUFDQSxNQUFNQyxZQUFZRixTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQWxCO0FBQUE7QUFBQTtBQUNBLE1BQU1FLGtCQUFrQkgsU0FBU0MsY0FBVCxDQUF3QixXQUF4QixDQUF4QjtBQUFBO0FBQUE7QUFDQSxNQUFNRyxxQkFBcUJKLFNBQVNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBM0IsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlucHV0RmlsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maWxlJyk7XHJcbmV4cG9ydCBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XHJcbmV4cG9ydCBjb25zdCBmaWxlTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1saXN0Jyk7XHJcbmV4cG9ydCBjb25zdCBmaWxlU3VtbWFyeUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1zdW1tYXJ5Jyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvaHRtbF9lbGVtZW50cy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {\n    'use strict';\n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnRUFBQSxpQ0FBTyxDQUNILHNCQURHLEVBRUgsc0JBRkcsQ0FBUCxrQ0FHRyxZQUFZO0FBQ1g7QUFFSCxDQU5EO0FBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXHJcbiAgICAnLi9saWIvdXBsb2FkJyxcclxuICAgICcuL2xpYi9odG1sX2VsZW1lbnRzJ1xyXG5dLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_elements__ = __webpack_require__(0);\n\n\nvar fileNames = [];\nvar fileList = [];\n\n__WEBPACK_IMPORTED_MODULE_0__html_elements__[\"inputFileBtn\"].onchange = function (e) {\n    var files = e.target.files;\n    for (var i = 0; i < files.length; i++) {\n        if (isFileRepeat(files[i].name)) continue;\n        addFiles(files[i]);\n    }\n};\n\n__WEBPACK_IMPORTED_MODULE_0__html_elements__[\"submitBtn\"].onclick = function () {\n    var formData = new FormData();\n    var xhr = new XMLHttpRequest();\n\n    fileList.forEach(function (file) {\n        formData.append(file.name, file);\n    });\n    xhr.open('post', '/api/upload');\n    xhr.onprogress = function (e) {\n        console.log((e.loaded * 100 / e.total).toFixed(0));\n    };\n    xhr.onload = function () {\n        alert(xhr.response);\n    };\n    xhr.onloadend = function () {};\n    xhr.onerror = function (err) {\n        console.error(err);\n    };\n    xhr.send(formData);\n};\n\n/**\r\n *\r\n * @param {String} fileName\r\n */\nfunction isFileRepeat(fileName) {\n    return fileNames.indexOf(fileName) != -1;\n}\n\n/**\r\n *\r\n * @param {File} file\r\n */\nfunction addFiles(file) {\n    var li = createListItem(file.name);\n    var index = fileList.length; //该li插入到ul中的索引\n\n    li.lastElementChild.firstElementChild.addEventListener('click', prefilling(function (i, ele) {\n        __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileListElement\"].removeChild(ele);\n        fileList.splice(i, 1);\n        onFileChange();\n    }, index, li));\n    __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileListElement\"].appendChild(li);\n\n    fileList.push(file);\n    fileNames.push(file.name);\n    onFileChange();\n}\n\n/**\r\n *\r\n * @param {String} fileName\r\n * @return {HTMLElement}\r\n */\nfunction createListItem(fileName) {\n    var li = document.createElement('li');\n    li.innerHTML = `<span class=\"file-name\">${fileName}</span>\n                    <span>\n                        <button class=\"btn-remove-file\">\n                            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\">\n                            </span>\n                        </button>\n                    </span>`;\n    li.className = 'list-group-item';\n    return li;\n}\n\n/**\r\n *\r\n * @param {Function} fn\r\n * @param {...any} args\r\n * @return {Function}\r\n */\nfunction prefilling(fn, ...args) {\n    return function (...moreArgs) {\n        fn.apply(this, args.concat(moreArgs));\n    };\n}\n\nfunction onFileChange() {\n    __WEBPACK_IMPORTED_MODULE_0__html_elements__[\"fileSummaryElement\"].innerText = `待上传文件数：${fileList.length}`;\n}\nonFileChange();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3VwbG9hZC5qcz9lY2EyIl0sIm5hbWVzIjpbImZpbGVOYW1lcyIsImZpbGVMaXN0IiwiaW5wdXRGaWxlQnRuIiwib25jaGFuZ2UiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJpIiwibGVuZ3RoIiwiaXNGaWxlUmVwZWF0IiwibmFtZSIsImFkZEZpbGVzIiwic3VibWl0QnRuIiwib25jbGljayIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZvckVhY2giLCJmaWxlIiwiYXBwZW5kIiwib3BlbiIsIm9ucHJvZ3Jlc3MiLCJjb25zb2xlIiwibG9nIiwibG9hZGVkIiwidG90YWwiLCJ0b0ZpeGVkIiwib25sb2FkIiwiYWxlcnQiLCJyZXNwb25zZSIsIm9ubG9hZGVuZCIsIm9uZXJyb3IiLCJlcnIiLCJlcnJvciIsInNlbmQiLCJmaWxlTmFtZSIsImluZGV4T2YiLCJsaSIsImNyZWF0ZUxpc3RJdGVtIiwiaW5kZXgiLCJsYXN0RWxlbWVudENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJlZmlsbGluZyIsImVsZSIsImZpbGVMaXN0RWxlbWVudCIsInJlbW92ZUNoaWxkIiwic3BsaWNlIiwib25GaWxlQ2hhbmdlIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiZm4iLCJhcmdzIiwibW9yZUFyZ3MiLCJhcHBseSIsImNvbmNhdCIsImZpbGVTdW1tYXJ5RWxlbWVudCIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSxZQUFZLEVBQWhCO0FBQ0EsSUFBSUMsV0FBVyxFQUFmOztBQUVBLDREQUFBQyxDQUFhQyxRQUFiLEdBQXdCLFVBQVVDLENBQVYsRUFBYTtBQUNqQyxRQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0Es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QUFuQixHQUFnQyxVQUFTN0QsU0FBU08sTUFBTyxFQUF6RDtBQUNIO0FBQ0R5QyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5wdXRGaWxlQnRuLCBzdWJtaXRCdG4sIGZpbGVMaXN0RWxlbWVudCwgZmlsZVN1bW1hcnlFbGVtZW50IH0gZnJvbSAnLi9odG1sX2VsZW1lbnRzJ1xyXG5cclxudmFyIGZpbGVOYW1lcyA9IFtdO1xyXG52YXIgZmlsZUxpc3QgPSBbXTtcclxuXHJcbmlucHV0RmlsZUJ0bi5vbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaXNGaWxlUmVwZWF0KGZpbGVzW2ldLm5hbWUpKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBhZGRGaWxlcyhmaWxlc1tpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnN1Ym1pdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgZmlsZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChmaWxlLm5hbWUsIGZpbGUpO1xyXG4gICAgfSlcclxuICAgIHhoci5vcGVuKCdwb3N0JywgJy9hcGkvdXBsb2FkJyk7XHJcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGUubG9hZGVkICogMTAwIC8gZS50b3RhbCkudG9GaXhlZCgwKSlcclxuICAgIH1cclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWxlcnQoeGhyLnJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIH1cclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlTmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGaWxlUmVwZWF0KGZpbGVOYW1lKSB7XHJcbiAgICByZXR1cm4gZmlsZU5hbWVzLmluZGV4T2YoZmlsZU5hbWUpICE9IC0xO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtGaWxlfSBmaWxlXHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRGaWxlcyhmaWxlKSB7XHJcbiAgICB2YXIgbGkgPSBjcmVhdGVMaXN0SXRlbShmaWxlLm5hbWUpO1xyXG4gICAgdmFyIGluZGV4ID0gZmlsZUxpc3QubGVuZ3RoOy8v6K+lbGnmj5LlhaXliLB1bOS4reeahOe0ouW8lVxyXG5cclxuICAgIGxpLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmVmaWxsaW5nKGZ1bmN0aW9uIChpLCBlbGUpIHtcclxuICAgICAgICBmaWxlTGlzdEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlKTtcclxuICAgICAgICBmaWxlTGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgb25GaWxlQ2hhbmdlKCk7XHJcbiAgICB9LCBpbmRleCwgbGkpKTtcclxuICAgIGZpbGVMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgZmlsZUxpc3QucHVzaChmaWxlKTtcclxuICAgIGZpbGVOYW1lcy5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICBvbkZpbGVDaGFuZ2UoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlTmFtZVxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RJdGVtKGZpbGVOYW1lKSB7XHJcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZmlsZS1uYW1lXCI+JHtmaWxlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmA7XHJcbiAgICBsaS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgIHJldHVybiBsaTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEBwYXJhbSB7Li4uYW55fSBhcmdzXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gcHJlZmlsbGluZyhmbiwgLi4uYXJncykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5tb3JlQXJncykge1xyXG4gICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KG1vcmVBcmdzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRmlsZUNoYW5nZSgpIHtcclxuICAgIGZpbGVTdW1tYXJ5RWxlbWVudC5pbm5lclRleHQgPSBg5b6F5LiK5Lyg5paH5Lu25pWw77yaJHtmaWxlTGlzdC5sZW5ndGh9YDtcclxufVxyXG5vbkZpbGVDaGFuZ2UoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91cGxvYWQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);