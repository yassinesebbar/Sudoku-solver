"use strict";
exports.__esModule = true;
var Sudoku = (function () {
    function Sudoku() {
        this.grids = 9;
        this.cellsPerGrid = 9;
        this.renderEmptyGrids();
        this.generateHashMap();
    }
    Sudoku.prototype.renderEmptyGrids = function () {
        this.sudokuHtml = "";
        for (var g = 1; g < this.grids + 1; g++) {
            this.sudokuHtml += "<table class='TB-" + g + "'>";
            for (var c = 1; c < this.cellsPerGrid + 1; c++) {
                var cellValue = g + "-" + c;
                if (c == 1) {
                    this.sudokuHtml += "<tr class='TR-" + cellValue + "'>";
                }
                this.sudokuHtml += "<td class='TD-" + cellValue + "'>";
                this.sudokuHtml += "<input min='1' max='9' type='number' id='INP-" + cellValue + "' >";
                this.sudokuHtml += "</td>";
                if (c == 3 || c == 6 || c == 9) {
                    this.sudokuHtml += "</tr>";
                }
                if (c == 3 || c == 6) {
                    this.sudokuHtml += "<tr class='TR-" + c + "'>";
                }
            }
            this.sudokuHtml += "</table>";
        }
    };
    Sudoku.prototype.generateHashMap = function () {
        this.sudokuCellHashMap = {};
        for (var grid = 1; grid < this.grids + 1; grid++) {
            this.sudokuCellHashMap[grid] = {};
            for (var cell = 1; cell < this.cellsPerGrid + 1; cell++) {
                this.sudokuCellHashMap[grid][cell] = null;
            }
        }
    };
    Sudoku.prototype.getHTML = function () {
        return this.sudokuHtml;
    };
    Sudoku.prototype.clearSudoku = function () {
        this.renderEmptyGrids();
        this.generateHashMap();
    };
    Sudoku.prototype.updateView = function () {
    };
    Sudoku.prototype.solveSudoku = function () {
    };
    return Sudoku;
}());
exports["default"] = Sudoku;
