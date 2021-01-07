/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formData);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy13ZWJwYWNrLy4vc3JjL2Zvcm1zLnRzPzUwYjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxJQUFJLE1BQU0sR0FBK0IsRUFBRSxDQUFDO0lBRTVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELGlFQUFlLFFBQVEsRUFBQyIsImZpbGUiOiIuL3NyYy9mb3Jtcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1EYXRhID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgbGV0IHZhbHVlczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybURhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.default)(form);\r\n    console.log(data);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy13ZWJwYWNrLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFFL0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztBQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBUSxFQUFFLEVBQUU7SUFDekMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLE1BQU0sSUFBSSxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtRGF0YSBmcm9tICcuL2Zvcm1zJztcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gZm9ybURhdGEoZm9ybSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;