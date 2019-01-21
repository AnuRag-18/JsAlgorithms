function sumZero(arr){
    var i = 0;
    var j = arr.length-1;
    while(i<j){
        sum = arr[i]+arr[j];
        if(sum == 0){
            return [arr[i],arr[j]];
        }
        else if (sum>0){
            j--;
        }
        else {
            i++;
        }
    }
    
}
console.log(sumZero([-2,-1,0,1,2,3]));

// function sum(arr){
//     for(var i =0;i<arr.length;i++){
//         for(var j = i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }
// console.log(sum([-2,-1,0,1,2]));


function sumXero(arr){
    var right = arr.length-1;
    var left = 0;
    for(var k = 0; k<arr.length;k++){
        sum = arr[left]+arr[right];
        if(sum==0){
            return [arr[left],arr[right]];
        }
        else if(sum> 0){
            right--;
        }
        else{
            left++;
        }
    }
}
console.log(sumXero([-1,0,1,2]));