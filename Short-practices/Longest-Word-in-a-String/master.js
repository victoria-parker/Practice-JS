function findlongestword(phrase){
    let words=phrase.split(' ')
    let longestword=0
    for(let i=0;i<words.length;i++){
        if(words[i].length>longestword){
            longestword=words[i].length
        }
    }
    return longestword;
}

let yourStr=prompt('Tell me a phrase and I\'ll tell your how long is the longest word')
document.write(findlongestword(yourStr))
