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

/***/ "./modules/application.ts":
/*!********************************!*\
  !*** ./modules/application.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar sudoku_1 = __webpack_require__(/*! ./sudoku */ \"./modules/sudoku.ts\");\r\nvar console_1 = __webpack_require__(/*! ./console */ \"./modules/console.ts\");\r\nvar Application = (function () {\r\n    function Application() {\r\n        this.title = \"Sudoku Solver\";\r\n        this.Sudoku = new sudoku_1[\"default\"]();\r\n        this.Console = new console_1[\"default\"]();\r\n    }\r\n    Application.prototype.run = function () {\r\n        this.createHTML();\r\n        this.addEventListeners();\r\n    };\r\n    Application.prototype.createHTML = function () {\r\n        var containerDivElement = document.createElement('div');\r\n        containerDivElement.id = \"Container\";\r\n        var titleH1Element = document.createElement('h1');\r\n        titleH1Element.innerText = this.title;\r\n        var GridWrapperDivElement = document.createElement('div');\r\n        GridWrapperDivElement.id = \"SudokuGameView\";\r\n        GridWrapperDivElement.innerHTML = this.Sudoku.getHTML();\r\n        containerDivElement.appendChild(titleH1Element);\r\n        containerDivElement.appendChild(GridWrapperDivElement);\r\n        containerDivElement.appendChild(this.Console.getConsoleDomElement());\r\n        document.body.appendChild(containerDivElement);\r\n    };\r\n    Application.prototype.userActionClearGrid = function () {\r\n        if (this.Console.clearButtonEnabled) {\r\n            this.Console.disableButtons();\r\n            this.Sudoku.clearSudoku();\r\n            this.Console.enableButtons();\r\n            console.log(\"clear\");\r\n        }\r\n    };\r\n    Application.prototype.userActionSolveSudoku = function () {\r\n        if (this.Console.startButtonEnabled) {\r\n            this.Console.disableButtons();\r\n            this.Sudoku.solveSudoku();\r\n            this.Console.enableClearButton();\r\n            console.log(\"solve\");\r\n        }\r\n    };\r\n    Application.prototype.addEventListeners = function () {\r\n        var _this = this;\r\n        this.Console.clearButtonElement.addEventListener(\"click\", function (e) { return _this.userActionClearGrid(); });\r\n        this.Console.startButtonElement.addEventListener(\"click\", function (e) { return _this.userActionSolveSudoku(); });\r\n    };\r\n    return Application;\r\n}());\r\nexports[\"default\"] = Application;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/application.ts?");

/***/ }),

/***/ "./modules/console.ts":
/*!****************************!*\
  !*** ./modules/console.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Console = (function () {\r\n    function Console() {\r\n        this.clearButtonEnabled = true;\r\n        this.startButtonEnabled = true;\r\n        this.createDomElements();\r\n    }\r\n    Console.prototype.createDomElements = function () {\r\n        this.startButtonElement = document.createElement('button');\r\n        this.startButtonElement.innerText = \"Start\";\r\n        this.clearButtonElement = document.createElement('button');\r\n        this.clearButtonElement.innerText = \"Clear\";\r\n        this.consoleWrapperDivElement = document.createElement(\"div\");\r\n        this.consoleWrapperDivElement.id = \"Console\";\r\n        this.consoleWrapperDivElement.appendChild(this.startButtonElement);\r\n        this.consoleWrapperDivElement.appendChild(this.clearButtonElement);\r\n    };\r\n    Console.prototype.getConsoleDomElement = function () {\r\n        return this.consoleWrapperDivElement;\r\n    };\r\n    Console.prototype.disableButtons = function () {\r\n        this.startButtonElement.disabled = true;\r\n        this.clearButtonElement.disabled = true;\r\n        this.clearButtonEnabled = this.startButtonEnabled = false;\r\n    };\r\n    Console.prototype.enableButtons = function () {\r\n        this.startButtonElement.disabled = false;\r\n        this.clearButtonElement.disabled = false;\r\n        this.clearButtonEnabled = this.startButtonEnabled = true;\r\n    };\r\n    Console.prototype.enableClearButton = function () {\r\n        this.startButtonElement.disabled = false;\r\n        this.clearButtonEnabled = true;\r\n    };\r\n    return Console;\r\n}());\r\nexports[\"default\"] = Console;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/console.ts?");

/***/ }),

/***/ "./modules/sudoku.ts":
/*!***************************!*\
  !*** ./modules/sudoku.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Sudoku = (function () {\r\n    function Sudoku() {\r\n        this.grids = 9;\r\n        this.cellsPerGrid = 9;\r\n        this.renderEmptyGrids();\r\n        this.generateHashMap();\r\n    }\r\n    Sudoku.prototype.renderEmptyGrids = function () {\r\n        this.sudokuHtml = \"\";\r\n        for (var g = 1; g < this.grids + 1; g++) {\r\n            this.sudokuHtml += \"<table class='TB-\" + g + \"'>\";\r\n            for (var c = 1; c < this.cellsPerGrid + 1; c++) {\r\n                var cellValue = g + \"-\" + c;\r\n                if (c == 1) {\r\n                    this.sudokuHtml += \"<tr class='TR-\" + cellValue + \"'>\";\r\n                }\r\n                this.sudokuHtml += \"<td class='TD-\" + cellValue + \"'>\";\r\n                this.sudokuHtml += \"<input min='1' max='9' type='number' id='INP-\" + cellValue + \"' >\";\r\n                this.sudokuHtml += \"</td>\";\r\n                if (c == 3 || c == 6 || c == 9) {\r\n                    this.sudokuHtml += \"</tr>\";\r\n                }\r\n                if (c == 3 || c == 6) {\r\n                    this.sudokuHtml += \"<tr class='TR-\" + c + \"'>\";\r\n                }\r\n            }\r\n            this.sudokuHtml += \"</table>\";\r\n        }\r\n    };\r\n    Sudoku.prototype.generateHashMap = function () {\r\n        this.sudokuCellHashMap = {};\r\n        for (var grid = 1; grid < this.grids + 1; grid++) {\r\n            this.sudokuCellHashMap[grid] = {};\r\n            for (var cell = 1; cell < this.cellsPerGrid + 1; cell++) {\r\n                this.sudokuCellHashMap[grid][cell] = null;\r\n            }\r\n        }\r\n    };\r\n    Sudoku.prototype.getHTML = function () {\r\n        return this.sudokuHtml;\r\n    };\r\n    Sudoku.prototype.clearSudoku = function () {\r\n        this.renderEmptyGrids();\r\n        this.generateHashMap();\r\n    };\r\n    Sudoku.prototype.updateView = function () {\r\n    };\r\n    Sudoku.prototype.solveSudoku = function () {\r\n    };\r\n    return Sudoku;\r\n}());\r\nexports[\"default\"] = Sudoku;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/sudoku.ts?");

/***/ }),

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar application_1 = __webpack_require__(/*! ./modules/application */ \"./modules/application.ts\");\r\nvar app = new application_1[\"default\"]();\r\nif (typeof document !== \"undefined\") {\r\n    app.run();\r\n}\r\nelse {\r\n    alert(\"document does not exist\");\r\n}\r\n\n\n//# sourceURL=webpack://sudoku-solver/./script.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.ts");
/******/ 	
/******/ })()
;