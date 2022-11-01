
var rotation = function(arr,k){
    for(var i=0 ; i<k ; i++){
        console.log("k =" ,arr.unshift(arr.pop()))
        console.log("array rotation =" , arr);
    }
}
rotation([4,5,6,7],4);

//IIFE function

(function rotation(arr,k){
    for(var i=0 ; i<k ; i++){
        console.log("k =" ,arr.unshift(arr.pop()))
        console.log("IIFE array rotation =" , arr);
}
})
([1,2,3,8],4)