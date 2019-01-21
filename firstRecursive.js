function countDown(num){
    if(num<=0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
console.log(countDown(4));

function secondRecursive(num){
    if(num===1) return 1;
    return num+secondRecursive(num-1);

}
console.log(secondRecursive(3));

function factorial(num){
    if(num===1) return 1;
    return num*factorial(num-1);
}
console.log(factorial(5));