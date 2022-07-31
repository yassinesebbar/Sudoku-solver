import  Sudoku from './sudoku';
import Console from './console';

export default class Application {

    Sudoku : Sudoku;
    Console : Console;
    title : string = "Sudoku Solver";

    constructor(){
        this.Sudoku = new Sudoku();
        this.Console = new Console();
    }

    run(){
        this.createHTML();
        this.addEventListeners();
    }

    createHTML(){
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
    }

    userActionClearGrid(){
        if(this.Console.clearButtonEnabled){
            this.Console.disableButtons();
            this.Sudoku.clearSudoku();
            this.Console.enableButtons();

            console.log("clear");
        }
    }

    userActionSolveSudoku(){
        if(this.Console.startButtonEnabled){
            this.Console.disableButtons();
            this.Sudoku.solveSudoku();
            this.Console.enableClearButton();

            console.log("solve");
        }
    }

    addEventListeners(){
        this.Console.clearButtonElement.addEventListener("click",  (e:Event) => this.userActionClearGrid());
        this.Console.startButtonElement.addEventListener("click",  (e:Event) => this.userActionSolveSudoku());
    }
}

