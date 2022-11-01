var odd = function(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
        console.log("odd =" ,arr[i])  
        }
    }
    
}
odd([1,2,3,4,5,6]);

//IIFE function

(function odd(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!=0){
        console.log("odd =" ,arr[i])  
        }
}
})
([11,12,13,14,15,16])