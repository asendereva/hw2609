var x1 = prompt('Введите x1', '');
var x2 = prompt('Введите x2', '');
var y1 = prompt('Введите y1', '');
var y2 = prompt('Введите y2', '');

function distance(x1, y1, x2, y2) {

     var a = Math.abs(x2 - x1);
     var b = Math.abs(y2 - y1);
          
     result = Math.sqrt(a*a + b*b); 
     
     return(result);
    
}
 
