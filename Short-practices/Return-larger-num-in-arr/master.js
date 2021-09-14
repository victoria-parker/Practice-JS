function largestOfFour(arr) {
    let maxNumArr=[];
    for(let i=0;i<arr.length;i++){
      let maxnumber=arr[i][0]
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>maxnumber){maxnumber=arr[i][j];}
      }maxNumArr.push(maxnumber)
    }
    return maxNumArr;
  }

document.write(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));