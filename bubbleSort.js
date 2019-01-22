function bubbleSort(arr){
    var noswaps;
    for(var i = arr.length;i>0;i--){
        noswaps = true;
        for(var j =0;j< i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                noswaps = false;
            }
        }
        if(noswaps) break;
    }
    return arr;
}
console.log(bubbleSort([5,3,4,1,2]));
function BubbleSort(arr){
    const swap = (arr,i,j)=>{
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    for(var i = arr.length;i>0;i--){
        for(var j=0;j<i-1 ;j++){
            console.log(arr,j,j+1);
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
console.log(BubbleSort([8,1,2,3,4,5,6,7]));

// Time Complexity {
//     bestCase:O[N];sorted Array,
//     wrostCase:O(N^2);
// }