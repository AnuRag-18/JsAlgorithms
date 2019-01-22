function selectionSort(arr){
   const swap = (arr,i,j)=>{
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    for(var i =0;i< arr.length;i++){
        var min = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
            
        }
        if(i!==min){
            swap(arr,i,min);
        }
    }
    return arr;
}
console.log(selectionSort([5,3,4,1,2]));
// Time Complexity{
//     wrostCase:O(N^2);
//     bestCase.:(O(N));
// }