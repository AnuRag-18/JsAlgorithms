function frequencyMatch(arr1,arr2){
 if(arr1.length !== arr2.length){
     return false;
 }
  for(var i =0;i<arr1.length ;i++){
      var m = arr2.indexOf(arr1[i]**2);
      if(m === -1){
          return false;
      }
      console.log(arr2);
      arr2.splice(m,1);
  }
  return true;
}
console.log(frequencyMatch([1,2,3],[1,9,4]));