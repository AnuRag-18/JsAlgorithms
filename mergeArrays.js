function mergeArrays(arr1,arr2){
    var result = [];
    var i = 0,j=0;
    while(i<arr1.length&&j<arr2.length){
       if(arr1[i]>arr2[j]){
           result.push(arr2[j]);
           j++;
       }
       else {
           result.push(arr1[i]);
           i++;
       }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
   var mid = Math.floor(arr.length/2);
    var left=mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    return mergeArrays(left,right);
}
var a=mergeSort([1,5,3,6,8,7,10]);
console.log(a);