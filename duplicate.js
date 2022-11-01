
var arr = function(array){
    for(let i=0 ; i<array.length ; i++){
        if(!array.includes(array[i])){
            array.push(array[i])   
        }   
    }
}
arr([1,1,2,3,3,4,5,6,7,8,9])
console.log("duplicate =" ,array);

