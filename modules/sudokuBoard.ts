export default class SudokuBoard {

    sudokuCellHashMap;
    grids;
    cellsPerGrid;

    constructor(grids, cellsPerGrid){
        this.grids = grids;
        this.cellsPerGrid = cellsPerGrid;
        this.generateHashMap();
    }

    renderEmptyGrids(){
       var html = "";

       for(var g = 1; g < this.grids+1; g++){

        html += "<table class='TB-"+ g +"'>";

           for(var c = 1; c < this.cellsPerGrid+1; c++){
               
               var cellValue = g + "-" + c;

               if(c == 1){html += "<tr class='TR-"+ cellValue +"'>";}

               html += "<td class='TD-"+ cellValue +"'>";
               html += "<input min='1' max='9' type='number' id='INP-"+ cellValue +"' >";
               html +="</td>";

               if(c == 3 || c == 6 || c == 9){html += "</tr>";}
               if(c == 3 || c == 6){html += "<tr class='TR-"+ c +"'>";}
           }

           html+= "</table>";    
       }

       return html;
    }

    generateHashMap(){
        this.sudokuCellHashMap = {};

        for(var grid = 1; grid < this.grids+1; grid++){
            this.sudokuCellHashMap[grid] = {};
            for(var cell = 1; cell < this.cellsPerGrid+1; cell++){
                this.sudokuCellHashMap[grid][cell] = null;
            }
        }
    }

    clear(){
        this.generateHashMap();
        document.querySelectorAll('input').forEach(item => {item.value = null;})
    }

    // string inputid -> INP-gridVal-cellVal -> INP-2-9
    updateCellValue(id, value){
       
        var gridNr = this.getGridFromCellId(id);
        var cellNr = this.getCellFromCellId(id);

        if(gridNr in this.sudokuCellHashMap){
            if(cellNr in this.sudokuCellHashMap[gridNr]){
                this.sudokuCellHashMap[gridNr][cellNr] = value;
            }
        }
    }

    updateView(){
        document.querySelectorAll('input').forEach(item => {
            var gridNr = this.getGridFromCellId(item.id);
            var cellNr = this.getCellFromCellId(item.id);

            if(item.value != this.sudokuCellHashMap[gridNr][cellNr]){
                item.value = this.sudokuCellHashMap[gridNr][cellNr];
            }
        })
    }

    // string inputid -> INP-gridVal-cellVal -> INP-2-9
    getGridFromCellId(id){
        if(id.length == 7){
            return id.substring(4, 5);
        }

        return null;
    }

    // string inputid -> INP-gridVal-cellVal -> INP-2-9
    getCellFromCellId(id){
        return id.substring(6, 7);
    }
}

