export  class Sudoku {

    sudokuHtml = "";
    sudokuCellHashMap = {};

    constructor(){
        this.buildHtml();
    }

    buildHtml(){
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

               this.sudokuCellHashMap["VAL-"+ cellValue] = 0;
           }
           html += "</table>";    
       }
       console.log(this.sudokuCellHashMap);


       this.sudokuHtml = html;
    }

    getHtml(){
        return this.sudokuHtml;
    }


}