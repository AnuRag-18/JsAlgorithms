function Anagram(first,second){
    if(first.length !== second.length){
        return false;
    }
    var letter = {};
    for(var i = 0;i< first.length;i++){
        // letter[first[i]]  = (letter[first[i]] || 0)+1;
        letter[first[i]] ? letter[first[i]] +=1:letter[first[i]] =1;

    }
    console.log(letter);
    for(var j = 0 ;j<second.length;j++){
        if(!letter[second[j]]){
            return false;
        }
        else {
            letter[second[j]]-=1;
        }
    }
    return true;
    // console.log(letter);

}
console.log(Anagram("hello","elloh"));

