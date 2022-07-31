

import {Sudoku} from './sudoku.js';

    const sudoku = new Sudoku();
    var html = sudoku.getHtml();


    document.getElementById("SudokuGameView").innerHTML = html;


