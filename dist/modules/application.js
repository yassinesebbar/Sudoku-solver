"use strict";
exports.__esModule = true;
var sudoku_1 = require("./sudoku");
var console_1 = require("./console");
var Application = (function () {
    function Application() {
        this.title = "Sudoku Solver";
        this.Sudoku = new sudoku_1["default"]();
        this.Console = new console_1["default"]();
    }
    Application.prototype.run = function () {
        this.createHTML();
        this.addEventListeners();
    };
    Application.prototype.createHTML = function () {
        var containerDivElement = document.createElement('div');
        containerDivElement.id = "Container";
        var titleH1Element = document.createElement('h1');
        titleH1Element.innerText = this.title;
        var GridWrapperDivElement = document.createElement('div');
        GridWrapperDivElement.id = "SudokuGameView";
        GridWrapperDivElement.innerHTML = this.Sudoku.getHTML();
        containerDivElement.appendChild(titleH1Element);
        containerDivElement.appendChild(GridWrapperDivElement);
        containerDivElement.appendChild(this.Console.getConsoleDomElement());
        document.body.appendChild(containerDivElement);
    };
    Application.prototype.userActionClearGrid = function () {
        if (this.Console.clearButtonEnabled) {
            this.Console.disableButtons();
            this.Sudoku.clearSudoku();
            this.Console.enableButtons();
            console.log("clear");
        }
    };
    Application.prototype.userActionSolveSudoku = function () {
        if (this.Console.startButtonEnabled) {
            this.Console.disableButtons();
            this.Sudoku.solveSudoku();
            this.Console.enableClearButton();
            console.log("solve");
        }
    };
    Application.prototype.addEventListeners = function () {
        var _this = this;
        this.Console.clearButtonElement.addEventListener("click", function (e) { return _this.userActionClearGrid(); });
        this.Console.startButtonElement.addEventListener("click", function (e) { return _this.userActionSolveSudoku(); });
    };
    return Application;
}());
exports["default"] = Application;
