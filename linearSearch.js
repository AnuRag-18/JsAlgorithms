function linearSerach(arr,value){
    var i = 0;
    for(i;i<arr.length;i++){
       if(arr[i]===value){
           return i;
       }
    }
    return -1;
}
console.log(linearSerach([1,2,4,5,7,8,9,15],5));


// Time complexity 
// best :O(1);
// avearage:O(n);
// worst:O(n);