function pivot(arr,start = 0,end=arr.length-1){
    function swap(arr,i,j){
        var temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    var swapIndex=start;
    var pivot = arr[start];
    for(var i = start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
            // console.log(arr);
           
        } 
    }
    swap(arr,start, swapIndex);
   
    return swapIndex;
}
// pivot([4,1,5,2,3,6,8]);

function QuickSort(arr,left=0,right=arr.length-1){
   
   if(left<right){
    var pivotIndex=pivot(arr,left,right);
    QuickSort(arr,left,pivotIndex-1);
    QuickSort(arr,pivotIndex+1,right);
   }
   return arr;
}
console.log(QuickSort([2,3,1,4,5,6,9]));