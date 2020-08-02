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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/area/Alpha.js":
/*!***************************!*\
  !*** ./src/area/Alpha.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Alpha = {\n    _registeredViews: new Map(),\n    render: function () {\n        console.log('This is container Alpha');\n\n        for (let config of this._registeredViews.values()) {\n            let ViewClass = config.view,\n                view = new ViewClass();\n            view.render(); \n        }\n\n        // this._registeredViews.size > 0 && this._registeredViews.values().forEach(config => {\n        //     let ViewClass = config.view,\n        //         view = new ViewClass();\n        //     view.render();            \n        // });\n    },\n    register: function (name, view, config) {\n        this._registeredViews.set(name, Object.assign({ view }, config));\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Alpha);\n\n//# sourceURL=webpack:///./src/area/Alpha.js?");

/***/ }),

/***/ "./src/area/Beta.js":
/*!**************************!*\
  !*** ./src/area/Beta.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Beta = {\n    _registeredViews: new Map(),\n\n    render: function (viewName) {\n        console.log('This is container Beta');\n\n        if (viewName) {\n            let ViewClass = this.resolve(viewName),\n                view = new ViewClass();\n            view.render();\n\n\n            let otherRegisterdViews = [];\n            for (let key of this._registeredViews.keys()) {\n                if (key !== viewName) {\n                    otherRegisterdViews.push(key);\n                }\n            }\n\n            console.log(`Beta area also had ${otherRegisterdViews.join(', ')} views registered apart from ${viewName}`);\n        }\n    },\n\n    register: function (name, view, config) {\n        this._registeredViews.set(name, Object.assign({ view }, config));\n    },\n\n    resolve: function (name) {\n        return this._registeredViews.get(name).view;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Beta);\n\n//# sourceURL=webpack:///./src/area/Beta.js?");

/***/ }),

/***/ "./src/area/index.js":
/*!***************************!*\
  !*** ./src/area/index.js ***!
  \***************************/
/*! exports provided: Alpha, Beta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Alpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alpha */ \"./src/area/Alpha.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Alpha\", function() { return _Alpha__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Beta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Beta */ \"./src/area/Beta.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Beta\", function() { return _Beta__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/area/index.js?");

/***/ }),

/***/ "./src/builder/AreaBuilder.js":
/*!************************************!*\
  !*** ./src/builder/AreaBuilder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AreaViewMapping__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaViewMapping */ \"./src/builder/AreaViewMapping.js\");\n/* harmony import */ var _enums_AreaTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/AreaTypes */ \"./src/enums/AreaTypes.js\");\n\n\n\nvar AreaBuilder = {\n    registerViews: function (area, views) {\n        let areaViews = _AreaViewMapping__WEBPACK_IMPORTED_MODULE_0__[\"default\"][area];\n\n        for (let view in areaViews) {\n            console.log(view);\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaBuilder);\n\n//# sourceURL=webpack:///./src/builder/AreaBuilder.js?");

/***/ }),

/***/ "./src/builder/AreaViewMapping.js":
/*!****************************************!*\
  !*** ./src/builder/AreaViewMapping.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enums_AreaTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/AreaTypes */ \"./src/enums/AreaTypes.js\");\n\n\nvar AreaViewMapping = {\n    [_enums_AreaTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ALPHA]: {\n        'Foo': {\n            viewPath: 'views/Foo.js',\n            config: {\n                charlie: 'A'\n            }\n        },\n        'Bar': {\n            viewPath: 'views/Bar.js',\n            config: {\n                charlie: 'B'\n            }\n        }\n    },\n    [_enums_AreaTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BETA]: {\n        'Baz': {\n            viewPath: 'views/Baz.js',\n            config: {\n                charlie: 'C'\n            }\n        },\n        'Bar': {\n            viewPath: 'views/Bar.js',\n            config: {\n                charlie: 'D'\n            }\n        }\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaViewMapping);\n\n//# sourceURL=webpack:///./src/builder/AreaViewMapping.js?");

/***/ }),

/***/ "./src/enums/AreaTypes.js":
/*!********************************!*\
  !*** ./src/enums/AreaTypes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    ALPHA: 'alpha',\n    BETA: 'beta'\n});\n\n//# sourceURL=webpack:///./src/enums/AreaTypes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ \"./src/area/index.js\");\n/* harmony import */ var _builder_AreaBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder/AreaBuilder */ \"./src/builder/AreaBuilder.js\");\n/* harmony import */ var _enums_AreaTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/AreaTypes */ \"./src/enums/AreaTypes.js\");\n\n\n\n\n_builder_AreaBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerViews(_enums_AreaTypes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ALPHA);\n\n_area__WEBPACK_IMPORTED_MODULE_0__[\"Alpha\"].render();\n_area__WEBPACK_IMPORTED_MODULE_0__[\"Beta\"].render('Baz');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });