var pal = function(pali){
  console.log(pali.reverse())
}
pal([1,2,3,4,5]);

//IIFE 

(function palin(palind){
  console.log(palind.reverse());
})
([5,6,7,8,9])