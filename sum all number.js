var array = [1,2,3,4,5,6,7,8,9]
var sum = function(array){
    var res = array.reduce((a,b)=>a+b)
    console.log("sum =" ,res)
}
sum(array);

//IIFE

(function sum(array){
    var res = array.reduce((a,b)=>a+b)
    console.log("IIFE sum =" ,res)
})
([1,2,3,4,5,6,7,8,])