function sortBY(num1,num2){
    return num1-num2;
}
var a=[12,15,16,2,6,9,45].sort(sortBY);
console.log(a);

function sortBY1(str1,str2){
    return str1.length-str2.length;
}
var b=['anurag','rao','siddhu','shylaja','jithenderRao'].sort(sortBY1);
console.log(b);