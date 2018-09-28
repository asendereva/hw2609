var n = 12;

var sum = 0;
for(var i = 1; i < n + 1; i++) {
    sum += i;
}

for(var i = 1; i < n; i++){
   var a = prompt('номера известных карточек', '');
   sum -= a;
}
   
console.log(sum);
