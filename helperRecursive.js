function collectOdds(arr){
    var a=[];
    function helper(helperinput){
        if(helperinput.length===0){
            return null;
        }
        if(helperinput[0]%2!==0){
            a.push(helperinput[0]);
        }
       helper(helperinput.slice(1));
    }
    helper(arr)
    return a;
}
console.log(collectOdds([1,2,3,4,5,6,8,1,1,2,3,3,5,56,5,7]));


function oddvalues(arr){
    var b = [];
    if(arr.length===0){
        return b;
    }
    if(arr[0]%2 !== 0){
         b.push(arr[0]);
    }
    return b.concat(oddvalues(arr.splice(1)));
}
console.log(oddvalues([1,4,5,6,7,8,9,11,13,15]));