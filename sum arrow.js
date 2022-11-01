var array = [5,6,7,8,9]
var sum = (array)=>{
    var res = array.reduce((a,b)=>a+b)
    console.log("sum =" ,res)
}
sum(array);