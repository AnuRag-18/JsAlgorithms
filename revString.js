function revString(s){
    var o = '';
    for(var i = s.length-1;i>=0;i--)

    o = o+s[i];
    return o;

}
console.log(revString("anurag"));
console.log(revString("rao"));

function revertString(s){
    var q = [];
    for(var i = s.length-1,j = 0;i>=0;i--,j++)
    q[j]=s[i];
    return q.join('');

}
console.log(revertString("hello"));

