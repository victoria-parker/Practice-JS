function uniteUnique(...arr) {
    let uniqueArr=[]
    let work=[...arr]
    
    for(let i=0;i<work.length;i++){
        let j=0;
        while(j<work[i].length){
            if(!uniqueArr.includes(work[i][j])){
                uniqueArr.push(work[i][j])
            };
            j++;
        }
    } 
    return uniqueArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));//debe devolver [1, 3, 2, 5, 4]

