export class Sudoku {

    sudokuHtml = "";
    sudokuCellHashMap = {};

    constructor(){
        this.renderEmptyGrid();
        this.generateHashMap();
    }

    renderEmptyGrid(){
       var html = "";

       for(var i = 1; i < 10; i++){
           html += "<table class='TB-"+ i +"'>";
           for(var z = 1; z < 10; z++){
               
               var cellValue = i + "-" + z;

               if(z == 1){html += "<tr class='TR-"+ cellValue +"'>";}

               html += "<td class='TD-"+ cellValue +"'>";
               html += "<input min='1' max='9' type='number' id='INP-"+ cellValue +"' >";
               html +="</td>";

               if(z == 3 || z == 6 || z == 9){html += "</tr>";}
               if(z == 3 || z == 6){html += "<tr class='TR-"+ z +"'>";}
           }

           html += "</table>";    
       }
       this.sudokuHtml = html;
    }

    generateHashMap(){
        for(var grid = 1; grid < 10; grid++){
            this.sudokuCellHashMap[grid] = {};
            for(var cell = 1; cell < 10; cell++){
                this.sudokuCellHashMap[grid][cell] = null;
            }
        }
    }

    getRendered(){
        return this.sudokuHtml;
    }

    clearSudoku(){
        this.renderEmptyGrid();
        this.generateHashMap();
    }

}