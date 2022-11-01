
var a = [1,2,3,4,5,6,7,8,9,10]
var primenum = [];

var pri = function (prime) {
    var num = prime / 2;
      for (var i = 2; i <= num; i++) {
       if ((prime % i) == 0) { 
        return false;
       } 
     }
     return true;
}
for (var j = 0; j < a.length; j++) {
  if (pri(a[j])) {
      primenum.push(a[j])
  }
}

console.log("prime =" , primenum);



 

