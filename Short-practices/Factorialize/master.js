function factorialize(num) {
      for(var factorized=1;num>0;num--){
        factorized*=num
      }
    return factorized;
  }

let yourNumber=parseInt(prompt('Tell me a number and I\'ll factorialize it'))
document.write(factorialize(yourNumber));