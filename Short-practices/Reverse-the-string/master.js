function reverseString(str) {
    let arr=[]
    let reversedStr='';
    for(let i=0;i<str.length;i++){
        arr.unshift(str[i])
        reversedStr=arr.join("")
        }
    return reversedStr;
}
let yourStr=prompt('Tell me a word and I\'ll reverse it')
document.write(reverseString(yourStr))
