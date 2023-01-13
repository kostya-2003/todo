/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/js/modules/UI.js\");\n/* harmony import */ var _modules_getElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getElements */ \"./src/js/modules/getElements.js\");\n/* harmony import */ var _modules_postElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postElements */ \"./src/js/modules/postElements.js\");\n\n\n\n\n\nconst url = \"http://localhost:8888/todos\"\n\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].runApp();\n(0,_modules_getElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url)\n;(0,_modules_postElements__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document.getElementById(\"todoForm\"), url)\n\n\n\n//# sourceURL=webpack://grouptest2-master/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/UI.js":
/*!******************************!*\
  !*** ./src/js/modules/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst root = document.getElementById(\"root\")\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    todoTitle: document.createElement(\"div\"),\r\n    titleElement: document.createElement(\"h2\"),\r\n    todoForm: document.createElement(\"form\"),\r\n    formInput: document.createElement(\"input\"),\r\n    formButton: document.createElement(\"button\"),\r\n    todoItems: document.createElement(\"div\"),\r\n    todoFooter: document.createElement(\"div\"),\r\n\r\n    elemName(){\r\n        this.todoTitle.id = \"todoTitle\"\r\n\t    this.titleElement.textContent = \"ToDo Application\"\r\n        this.todoForm.id = \"todoForm\"\r\n        this.formInput.type = \"text\"\r\n        this.formInput.placeholder = \"Type Here\"\r\n        this.formButton.textContent = \"Add\"\r\n        this.todoItems.id = \"todoItems\"\r\n        this.todoFooter.id = \"todoFooter\"\r\n    },\r\n\r\n    elemStyle(){\r\n        document.body.style = \"margin: 24px\"\r\n        root.style = `max-width: 320px;margin: 50px auto;padding: 24px;border-radius: 7px;background: #303F9F;font-family: tahoma;`;\r\n        this.titleElement.style = \"color: #FFEB3B; font-size: 24px; margin-bottom: 24px;\"\r\n        this.todoForm.style = \"margin-bottom: 24px; display: flex\"\r\n        this.formInput.style = `display: block;padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 7px 0px 0px 7px;width: 100%;`\r\n        this.formButton.style = `padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 0px 7px 7px 0px;background: #FFEB3B;color: #111;cursor: pointer;font-weight: bold;`\r\n    },\r\n\r\n    appendElem(){\r\n        this.todoTitle.append(this.titleElement);\r\n        this.todoForm.append(this.formInput, this.formButton)\r\n        root.append(this.todoTitle,this.todoForm, this.todoItems, this.todoFooter)\r\n    },\r\n\r\n    listElements(name, isComplete, id){\r\n        this.todoItems.innerHTML += `\r\n        <div class=\"${isComplete ? \"listElement active\" : \"listElement\"}\" id=\"${id}\"  style=\"\r\n\t\t\tdisplay:flex;\r\n\t\t\tjustify-content:space-between;\r\n\t\t\talign-items:center;\r\n\t\t\tmargin-bottom: 12px;\r\n\t\t\">\r\n\t\t\t<label style=\"display: block;color: #fff;\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"isCompleteBtn\">\r\n\t\t\t\t<span>${name}</span>\r\n\t\t\t</label>\r\n\t\t\t<button\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\tbackground: #3F51B5;\r\n\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tpadding: 7px;\r\n\t\t\t\t\tborder-radius: 7px;\r\n\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\"\r\n\t\t\t\tdata-rm >\r\n\t\t\t\tRemove\r\n\t\t\t</button>\r\n\t\t</div>\r\n        `\r\n    },\r\n\r\n    todoFooterElem(todoItems){\r\n       const arr = []\r\n        todoItems.forEach(items => { \r\n            if(items.classList.contains(\"active\")){\r\n                arr.push(items)\r\n            }\r\n            this.todoFooter.innerHTML = `\r\n            <span style=\"font-style: italic;color: #FFEB3B\">${arr.length} / ${todoItems.length}</span>`\r\n        })\r\n    },\r\n\r\n    runApp(){\r\n        this.appendElem()\r\n        this.elemName()\r\n        this.elemStyle()\r\n    }\r\n});\n\n//# sourceURL=webpack://grouptest2-master/./src/js/modules/UI.js?");

/***/ }),

/***/ "./src/js/modules/elementComplete.js":
/*!*******************************************!*\
  !*** ./src/js/modules/elementComplete.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(isCompleteBtn, url){\r\n    isCompleteBtn.forEach(btn => {\r\n        const items = btn.parentElement.parentElement\r\n        if(items.classList.contains(\"active\")){\r\n            btn.checked = true\r\n        }\r\n        let checked = false;\r\n        if(!btn.checked){\r\n            checked = true\r\n        }\r\n        btn.addEventListener(\"click\", ()=>{\r\n            const id = btn.parentElement.parentElement.id\r\n            fetch(`${url}/${id}`, {\r\n                method: \"PATCH\",\r\n                headers: {\r\n                \"content-type\": \"application/json\"\r\n                },\r\n                body: JSON.stringify({ isComplete: checked}\r\n                )\r\n            })\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/modules/elementComplete.js?");

/***/ }),

/***/ "./src/js/modules/getElements.js":
/*!***************************************!*\
  !*** ./src/js/modules/getElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/js/modules/UI.js\");\n/* harmony import */ var _removeElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeElements */ \"./src/js/modules/removeElements.js\");\n/* harmony import */ var _elementComplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementComplete */ \"./src/js/modules/elementComplete.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(url){\r\n    fetch(url)\r\n    .then(data => data.json())\r\n    .then(data => data.forEach(obj => _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listElements(obj.name,obj.isComplete, obj.id)))\r\n    .then(() => {\r\n        (0,_removeElements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.querySelectorAll(\"[data-rm]\"), url)\r\n        ;(0,_elementComplete__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(document.querySelectorAll(\".isCompleteBtn\"), url)\r\n        _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoFooterElem(document.querySelectorAll(\".listElement\"))\r\n    })\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/modules/getElements.js?");

/***/ }),

/***/ "./src/js/modules/postElements.js":
/*!****************************************!*\
  !*** ./src/js/modules/postElements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(todoForm, url){\r\n    todoForm.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const name = todoForm.firstElementChild.value.trim()\r\n        fetch(url, {\r\n            method: \"POST\",\r\n            headers: {\r\n                \"content-type\": \"application/json\"\r\n            },\r\n            body: JSON.stringify({name: name, isComplete: false})\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/modules/postElements.js?");

/***/ }),

/***/ "./src/js/modules/removeElements.js":
/*!******************************************!*\
  !*** ./src/js/modules/removeElements.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(removeBtn, url){\r\n    removeBtn.forEach(btn => {\r\n        btn.addEventListener(\"click\", (e) => {\r\n            e.preventDefault()\r\n            const id = btn.parentElement.id;\r\n            fetch(`${url}/${id}`, {\r\n                method: \"DELETE\"\r\n            })\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack://grouptest2-master/./src/js/modules/removeElements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;