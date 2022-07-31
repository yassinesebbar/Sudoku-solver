import {Sudoku} from './sudoku.js';
import {Console} from './console.js';



export class Application {

    constructor(){
        this.Sudoku = new Sudoku();
        this.Console = new Console();
    }

    run(){
        document.getElementById("SudokuGameView").innerHTML = this.Sudoku.getRendered();
        this.addEventListeners();

    }

    addEventListeners(){
        this.Console.clearButton.addEventListener("click", this.clearGrid);
        this.Console.startButton.addEventListener("click", this.solveSudoku);
    }

    clearGrid(){
        this.Console.DisableButtons();
        this.Sudoku.configurate();
        this.Console.EnableButtons();
    }

    solveSudoku(){
        this.Console.DisableButtons();
        this.Sudoku.solve();
        this.Console.EnableButtons();
    }
}

