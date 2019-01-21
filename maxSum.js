// function maxSum(arr,num){
//     if(num > arr.length){
//         return null;
//     };
//     var max = -Infinity;
//     for(var i = 0;i< arr.length-num+1;i++){
//         for(var j =0 ; j<num ;j++){
//           var temp = 0;
//           temp = arr[i+j];
//           }
//           if(temp>max){
//             max = temp;
//             console.log(max);
//         }
//     }
//     return max;
// }
// console.log(maxSum([1,3,7,8,5],2));
function maxSum(arr,num){
    if(num>arr.length)
    return null;
    var temp = 0;
    var  max = 0;
    for(var  i = 0;i< num;i++){
        temp +=arr[i];
    }
    max= temp;

    for(var j = num;j< arr.length;j++){
        temp = temp - arr[j-num]+arr[j];
        max= Math.max(max,temp);

    }
    return max;
}
console.log(maxSum([1,2,3,4,5,6],3));