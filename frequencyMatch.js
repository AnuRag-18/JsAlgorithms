// function frequencyMatch(arr1,arr2){
//  if(arr1.length !== arr2.length){
//      return false;
//  }
//   for(var i =0;i<arr1.length ;i++){
//       var m = arr2.indexOf(arr1[i]**2);
//       if(m === -1){
//           return false;
//       }
//       console.log(arr2);
//       arr2.splice(m,1);
//   }
//   return true;
// }
// console.log(frequencyMatch([1,2,3],[1,9,4]));

function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
     var freCounter1={};
     var freCounter2={};
    for(var s of arr1){
        freCounter1[s]= (freCounter1[s] || 0) +1;
        
    }
    for(var s of arr2){
        freCounter2[s]= (freCounter2[s] || 0) +1;
       
    }
    console.log(freCounter1);
    console.log(freCounter2);
    for(var g in freCounter1){
        if(!(g ** 2 in freCounter2)){
            return false;
        }
        if(freCounter2[g ** 2]!== freCounter1[g]){
            return false;
        }
    }
    return true;
}
console.log(same([1,3,2],[1,4,9]));