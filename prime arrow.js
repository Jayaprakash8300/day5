var a = [10,11,12,13,14,15,16,17,18,19]
var primenum = [];

var pri =  (prime) => {
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
