function binarySearch(arr,value){
    var i = 0;
    var j= arr.length-1;
    var k = Math.floor((i+j)/2);
    while(value !==arr[k] && i<j){
        if(value < arr[k]){
            j = k-1;
        }
        else {
            i=k+1;
        }
        k = Math.floor((i+j)/2);
        console.log(i,j,k);
    }
    return value===arr[k]? k:-1;
}
console.log(binarySearch([1,2,3,4,5,8,10],3));

// time complexity 
// wrost/average:O(logn)
// best case:O(1);