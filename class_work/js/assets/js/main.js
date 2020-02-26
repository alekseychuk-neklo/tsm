let counter = 0;
let id =setInterval(function () {
     if (++counter ==10){
         clearInterval(id);
     }
     console.log(counter);
 }, 1000);


(function recursion(i) {
     if (i<10000){
        setTimeout(function() {
            console.log(i);
            recursion(i+1000);
        }, i);
     }

})(1000);