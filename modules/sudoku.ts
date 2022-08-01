import SudokuEngine from "./SudokuEngine";
import SudokuBoard from "./sudokuBoard";

export default class Sudoku {

    SudokuBoard : SudokuBoard;
    SudokuEngine : SudokuEngine;

    maxNum = 9;
    minNum = 1;
    maxSumTotalRow = 45;
    grids = 9;
    cellsPerGrid = 9;
    // string inputid -> INP-gridVal-cellVal -> INP-2-9

    constructor(){
        this.SudokuBoard = new SudokuBoard(this.grids, this.cellsPerGrid);
        this.SudokuEngine = new SudokuEngine(this.maxNum, this.minNum, this.maxSumTotalRow);
    }

    updateBoard(cellId, value){
        console.log(this.checkCellValue(value) + " " + (cellId.length == 7));
        if(this.checkCellValue(value) && cellId.length == 7){
            this.SudokuBoard.updateCellValue(cellId, value);
        }else{
            this.SudokuBoard.updateView();
        }
    }
   
    solve(){

    }
    
    clearBoard(){
        this.SudokuBoard.clear();
    }

    getEmptyHTMLGrids(){
        return this.SudokuBoard.renderEmptyGrids();
    }
 
     checkCellValue(value){
        if(value <= this.maxNum && value >= this.minNum){
            return true;
        }
        
        return false;
    }

}
