"use strict";
exports.__esModule = true;
var SudokuEngine_1 = require("./SudokuEngine");
var sudokuBoard_1 = require("./sudokuBoard");
var Sudoku = (function () {
    function Sudoku() {
        this.maxNum = 9;
        this.minNum = 1;
        this.maxSumTotalRow = 45;
        this.grids = 9;
        this.cellsPerGrid = 9;
        this.SudokuBoard = new sudokuBoard_1["default"](this.grids, this.cellsPerGrid);
        this.SudokuEngine = new SudokuEngine_1["default"](this.maxNum, this.minNum, this.maxSumTotalRow);
    }
    Sudoku.prototype.updateBoard = function (cellId, value) {
        console.log(this.checkCellValue(value) + " " + (cellId.length == 7));
        if (this.checkCellValue(value) && cellId.length == 7) {
            this.SudokuBoard.updateCellValue(cellId, value);
        }
        else {
            this.SudokuBoard.updateView();
        }
        console.log(this.SudokuBoard.sudokuCellHashMap);
    };
    Sudoku.prototype.solve = function () {
    };
    Sudoku.prototype.clearBoard = function () {
        this.SudokuBoard.clear();
    };
    Sudoku.prototype.getEmptyHTMLGrids = function () {
        return this.SudokuBoard.renderEmptyGrids();
    };
    Sudoku.prototype.checkCellValue = function (value) {
        if (value <= this.maxNum && value >= this.minNum) {
            return true;
        }
        return false;
    };
    return Sudoku;
}());
exports["default"] = Sudoku;
