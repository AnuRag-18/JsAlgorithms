// function countChar(n){
//     var result = {};
//     for(var m of n){
//         // var m = n[i];
//        if(/[a-z0-9]/.test(m)){
//         if(result[m]>0){
//           result[m]++;
//         }
//         else{
//             result[m]=1;
//         }
//     }
//    }
//     return result;
// }
// console.log(countChar('hello ,hi world'));
function countChar(str){
    var result = {};
    for(var i = 0;i<str.length;i++){
        var m = str[i].toLowerCase();
        if(/[a-z0-9]/.test(m)) {
            if(result[m]>0){
                result[m]++;
            }
            else{
                result[m] = 1;
            }
        }
    }
    return result;
}
console.log(countChar("hello sexy baby !"));