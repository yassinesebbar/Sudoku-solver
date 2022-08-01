"use strict";
exports.__esModule = true;
var console_1 = require("./console");
var sudoku_1 = require("./sudoku");
var Application = (function () {
    function Application() {
        this.title = "Sudoku Solver";
        this.Console = new console_1["default"]();
        this.Sudoku = new sudoku_1["default"]();
    }
    Application.prototype.run = function () {
        this.renderView();
        this.addEventListeners();
    };
    Application.prototype.renderView = function () {
        var containerDivElement = document.createElement('div');
        containerDivElement.id = "Container";
        var titleH1Element = document.createElement('h1');
        titleH1Element.innerText = this.title;
        var GridWrapperDivElement = document.createElement('div');
        GridWrapperDivElement.id = "SudokuGameView";
        GridWrapperDivElement.innerHTML = this.Sudoku.getEmptyHTMLGrids();
        containerDivElement.appendChild(titleH1Element);
        containerDivElement.appendChild(GridWrapperDivElement);
        containerDivElement.appendChild(this.Console.getConsoleDomElement());
        document.body.appendChild(containerDivElement);
    };
    Application.prototype.addEventListeners = function () {
        var _this = this;
        this.Console.clearButtonElement.addEventListener("click", function (e) { return _this.userActionClearGrid(); });
        this.Console.startButtonElement.addEventListener("click", function (e) { return _this.userActionSolveSudoku(); });
        document.querySelectorAll('input').forEach(function (item) {
            item.addEventListener('change', function (e) { return _this.userActionChangeInput(e); });
        });
    };
    Application.prototype.userActionClearGrid = function () {
        if (this.Console.clearButtonEnabled) {
            this.Console.disableButtons();
            this.Sudoku.clearBoard();
            this.Console.enableButtons();
            console.log("clear");
        }
    };
    Application.prototype.userActionSolveSudoku = function () {
        if (this.Console.startButtonEnabled) {
            this.Console.disableButtons();
            this.Sudoku.solve();
            this.Console.enableClearButton();
        }
    };
    Application.prototype.userActionChangeInput = function (e) {
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.id);
        this.Sudoku.updateBoard(e.target.id, e.target.value);
    };
    return Application;
}());
exports["default"] = Application;
