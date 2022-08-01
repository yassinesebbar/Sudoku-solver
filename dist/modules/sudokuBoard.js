"use strict";
exports.__esModule = true;
var SudokuBoard = (function () {
    function SudokuBoard(grids, cellsPerGrid) {
        this.grids = grids;
        this.cellsPerGrid = cellsPerGrid;
        this.generateHashMap();
    }
    SudokuBoard.prototype.renderEmptyGrids = function () {
        var html = "";
        for (var g = 1; g < this.grids + 1; g++) {
            html += "<table class='TB-" + g + "'>";
            for (var c = 1; c < this.cellsPerGrid + 1; c++) {
                var cellValue = g + "-" + c;
                if (c == 1) {
                    html += "<tr class='TR-" + cellValue + "'>";
                }
                html += "<td class='TD-" + cellValue + "'>";
                html += "<input min='1' max='9' type='number' id='INP-" + cellValue + "' >";
                html += "</td>";
                if (c == 3 || c == 6 || c == 9) {
                    html += "</tr>";
                }
                if (c == 3 || c == 6) {
                    html += "<tr class='TR-" + c + "'>";
                }
            }
            html += "</table>";
        }
        return html;
    };
    SudokuBoard.prototype.generateHashMap = function () {
        this.sudokuCellHashMap = {};
        for (var grid = 1; grid < this.grids + 1; grid++) {
            this.sudokuCellHashMap[grid] = {};
            for (var cell = 1; cell < this.cellsPerGrid + 1; cell++) {
                this.sudokuCellHashMap[grid][cell] = null;
            }
        }
    };
    SudokuBoard.prototype.clear = function () {
        this.generateHashMap();
        document.querySelectorAll('input').forEach(function (item) { item.value = null; });
    };
    SudokuBoard.prototype.updateCellValue = function (id, value) {
        var gridNr = this.getGridFromCellId(id);
        var cellNr = this.getCellFromCellId(id);
        if (gridNr in this.sudokuCellHashMap) {
            if (cellNr in this.sudokuCellHashMap[gridNr]) {
                this.sudokuCellHashMap[gridNr][cellNr] = value;
            }
        }
    };
    SudokuBoard.prototype.updateView = function () {
        var _this = this;
        document.querySelectorAll('input').forEach(function (item) {
            var gridNr = _this.getGridFromCellId(item.id);
            var cellNr = _this.getCellFromCellId(item.id);
            if (item.value != _this.sudokuCellHashMap[gridNr][cellNr]) {
                item.value = _this.sudokuCellHashMap[gridNr][cellNr];
            }
        });
        console.log(this.sudokuCellHashMap);
    };
    SudokuBoard.prototype.getGridFromCellId = function (id) {
        if (id.length == 7) {
            return id.substring(4, 5);
        }
        return null;
    };
    SudokuBoard.prototype.getCellFromCellId = function (id) {
        return id.substring(6, 7);
    };
    return SudokuBoard;
}());
exports["default"] = SudokuBoard;
