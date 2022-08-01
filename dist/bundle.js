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

/***/ "./modules/SudokuEngine.ts":
/*!*********************************!*\
  !*** ./modules/SudokuEngine.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar SudokuEngine = (function () {\r\n    function SudokuEngine(maxNum, minNum, maxSumTotalRow) {\r\n        this.maxNum = maxNum;\r\n        this.minNum = minNum;\r\n        this.maxSumTotalRow = maxSumTotalRow;\r\n    }\r\n    return SudokuEngine;\r\n}());\r\nexports[\"default\"] = SudokuEngine;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/SudokuEngine.ts?");

/***/ }),

/***/ "./modules/application.ts":
/*!********************************!*\
  !*** ./modules/application.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar console_1 = __webpack_require__(/*! ./console */ \"./modules/console.ts\");\r\nvar sudoku_1 = __webpack_require__(/*! ./sudoku */ \"./modules/sudoku.ts\");\r\nvar Application = (function () {\r\n    function Application() {\r\n        this.title = \"Sudoku Solver\";\r\n        this.Console = new console_1[\"default\"]();\r\n        this.Sudoku = new sudoku_1[\"default\"]();\r\n    }\r\n    Application.prototype.run = function () {\r\n        this.renderView();\r\n        this.addEventListeners();\r\n    };\r\n    Application.prototype.renderView = function () {\r\n        var containerDivElement = document.createElement('div');\r\n        containerDivElement.id = \"Container\";\r\n        var titleH1Element = document.createElement('h1');\r\n        titleH1Element.innerText = this.title;\r\n        var GridWrapperDivElement = document.createElement('div');\r\n        GridWrapperDivElement.id = \"SudokuGameView\";\r\n        GridWrapperDivElement.innerHTML = this.Sudoku.getEmptyHTMLGrids();\r\n        containerDivElement.appendChild(titleH1Element);\r\n        containerDivElement.appendChild(GridWrapperDivElement);\r\n        containerDivElement.appendChild(this.Console.getConsoleDomElement());\r\n        document.body.appendChild(containerDivElement);\r\n    };\r\n    Application.prototype.addEventListeners = function () {\r\n        var _this = this;\r\n        this.Console.clearButtonElement.addEventListener(\"click\", function (e) { return _this.userActionClearGrid(); });\r\n        this.Console.startButtonElement.addEventListener(\"click\", function (e) { return _this.userActionSolveSudoku(); });\r\n        document.querySelectorAll('input').forEach(function (item) {\r\n            item.addEventListener('change', function (e) { return _this.userActionChangeInput(e); });\r\n        });\r\n    };\r\n    Application.prototype.userActionClearGrid = function () {\r\n        if (this.Console.clearButtonEnabled) {\r\n            this.Console.disableButtons();\r\n            this.Sudoku.clearBoard();\r\n            this.Console.enableButtons();\r\n            console.log(\"clear\");\r\n        }\r\n    };\r\n    Application.prototype.userActionSolveSudoku = function () {\r\n        if (this.Console.startButtonEnabled) {\r\n            this.Console.disableButtons();\r\n            this.Sudoku.solve();\r\n            this.Console.enableClearButton();\r\n        }\r\n    };\r\n    Application.prototype.userActionChangeInput = function (e) {\r\n        console.log(e.target);\r\n        console.log(e.target.value);\r\n        console.log(e.target.id);\r\n        this.Sudoku.updateBoard(e.target.id, e.target.value);\r\n    };\r\n    return Application;\r\n}());\r\nexports[\"default\"] = Application;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/application.ts?");

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar SudokuEngine_1 = __webpack_require__(/*! ./SudokuEngine */ \"./modules/SudokuEngine.ts\");\r\nvar sudokuBoard_1 = __webpack_require__(/*! ./sudokuBoard */ \"./modules/sudokuBoard.ts\");\r\nvar Sudoku = (function () {\r\n    function Sudoku() {\r\n        this.maxNum = 9;\r\n        this.minNum = 1;\r\n        this.maxSumTotalRow = 45;\r\n        this.grids = 9;\r\n        this.cellsPerGrid = 9;\r\n        this.SudokuBoard = new sudokuBoard_1[\"default\"](this.grids, this.cellsPerGrid);\r\n        this.SudokuEngine = new SudokuEngine_1[\"default\"](this.maxNum, this.minNum, this.maxSumTotalRow);\r\n    }\r\n    Sudoku.prototype.updateBoard = function (cellId, value) {\r\n        console.log(this.checkCellValue(value) + \" \" + (cellId.length == 7));\r\n        if (this.checkCellValue(value) && cellId.length == 7) {\r\n            this.SudokuBoard.updateCellValue(cellId, value);\r\n        }\r\n        else {\r\n            this.SudokuBoard.updateView();\r\n        }\r\n        console.log(this.SudokuBoard.sudokuCellHashMap);\r\n    };\r\n    Sudoku.prototype.solve = function () {\r\n    };\r\n    Sudoku.prototype.clearBoard = function () {\r\n        this.SudokuBoard.clear();\r\n    };\r\n    Sudoku.prototype.getEmptyHTMLGrids = function () {\r\n        return this.SudokuBoard.renderEmptyGrids();\r\n    };\r\n    Sudoku.prototype.checkCellValue = function (value) {\r\n        if (value <= this.maxNum && value >= this.minNum) {\r\n            return true;\r\n        }\r\n        return false;\r\n    };\r\n    return Sudoku;\r\n}());\r\nexports[\"default\"] = Sudoku;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/sudoku.ts?");

/***/ }),

/***/ "./modules/sudokuBoard.ts":
/*!********************************!*\
  !*** ./modules/sudokuBoard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar SudokuBoard = (function () {\r\n    function SudokuBoard(grids, cellsPerGrid) {\r\n        this.grids = grids;\r\n        this.cellsPerGrid = cellsPerGrid;\r\n        this.generateHashMap();\r\n    }\r\n    SudokuBoard.prototype.renderEmptyGrids = function () {\r\n        var html = \"\";\r\n        for (var g = 1; g < this.grids + 1; g++) {\r\n            html += \"<table class='TB-\" + g + \"'>\";\r\n            for (var c = 1; c < this.cellsPerGrid + 1; c++) {\r\n                var cellValue = g + \"-\" + c;\r\n                if (c == 1) {\r\n                    html += \"<tr class='TR-\" + cellValue + \"'>\";\r\n                }\r\n                html += \"<td class='TD-\" + cellValue + \"'>\";\r\n                html += \"<input min='1' max='9' type='number' id='INP-\" + cellValue + \"' >\";\r\n                html += \"</td>\";\r\n                if (c == 3 || c == 6 || c == 9) {\r\n                    html += \"</tr>\";\r\n                }\r\n                if (c == 3 || c == 6) {\r\n                    html += \"<tr class='TR-\" + c + \"'>\";\r\n                }\r\n            }\r\n            html += \"</table>\";\r\n        }\r\n        return html;\r\n    };\r\n    SudokuBoard.prototype.generateHashMap = function () {\r\n        this.sudokuCellHashMap = {};\r\n        for (var grid = 1; grid < this.grids + 1; grid++) {\r\n            this.sudokuCellHashMap[grid] = {};\r\n            for (var cell = 1; cell < this.cellsPerGrid + 1; cell++) {\r\n                this.sudokuCellHashMap[grid][cell] = null;\r\n            }\r\n        }\r\n    };\r\n    SudokuBoard.prototype.clear = function () {\r\n        this.generateHashMap();\r\n        document.querySelectorAll('input').forEach(function (item) { item.value = null; });\r\n    };\r\n    SudokuBoard.prototype.updateCellValue = function (id, value) {\r\n        var gridNr = this.getGridFromCellId(id);\r\n        var cellNr = this.getCellFromCellId(id);\r\n        if (gridNr in this.sudokuCellHashMap) {\r\n            if (cellNr in this.sudokuCellHashMap[gridNr]) {\r\n                this.sudokuCellHashMap[gridNr][cellNr] = value;\r\n            }\r\n        }\r\n    };\r\n    SudokuBoard.prototype.updateView = function () {\r\n        var _this = this;\r\n        document.querySelectorAll('input').forEach(function (item) {\r\n            var gridNr = _this.getGridFromCellId(item.id);\r\n            var cellNr = _this.getCellFromCellId(item.id);\r\n            if (item.value != _this.sudokuCellHashMap[gridNr][cellNr]) {\r\n                item.value = _this.sudokuCellHashMap[gridNr][cellNr];\r\n            }\r\n        });\r\n        console.log(this.sudokuCellHashMap);\r\n    };\r\n    SudokuBoard.prototype.getGridFromCellId = function (id) {\r\n        if (id.length == 7) {\r\n            return id.substring(4, 5);\r\n        }\r\n        return null;\r\n    };\r\n    SudokuBoard.prototype.getCellFromCellId = function (id) {\r\n        return id.substring(6, 7);\r\n    };\r\n    return SudokuBoard;\r\n}());\r\nexports[\"default\"] = SudokuBoard;\r\n\n\n//# sourceURL=webpack://sudoku-solver/./modules/sudokuBoard.ts?");

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