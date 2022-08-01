import Console from './console';
import Sudoku from './sudoku';


export default class Application {

    Console : Console;
    Sudoku : Sudoku;

    title : string = "Sudoku Solver";

    constructor(){
        this.Console = new Console();
        this.Sudoku = new Sudoku();
    }

    run(){
        this.renderView();
        this.addEventListeners();
    }

    renderView(){
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
    }

    addEventListeners(){
        this.Console.clearButtonElement.addEventListener("click",  (e:Event) => this.userActionClearGrid());
        this.Console.startButtonElement.addEventListener("click",  (e:Event) => this.userActionSolveSudoku());

        document.querySelectorAll('input').forEach(item => {
            item.addEventListener('change',(e:Event) => this.userActionChangeInput(e));
        })
    }

    userActionClearGrid(){
        if(this.Console.clearButtonEnabled){

            this.Console.disableButtons();

            this.Sudoku.clearBoard();

            this.Console.enableButtons();

            console.log("clear");
        }
    }

    userActionSolveSudoku(){
        if(this.Console.startButtonEnabled){
            this.Console.disableButtons();
            this.Sudoku.solve();
            this.Console.enableClearButton();
        }
    }

    userActionChangeInput(e){
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.id);
        
        this.Sudoku.updateBoard(e.target.id, e.target.value);
    }

   
}

