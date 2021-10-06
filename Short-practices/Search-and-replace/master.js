function myReplace(str, before, after) {
    
    let arr=str.split(' ');
    let captest=/^[A-Z]+/

    for(let i=0;i<arr.length;i++){
        if(arr[i]==before){
            
            if(captest.test(before) && !captest.test(after)){
                
                //transformar after a que tenga mayuscula
                    let afterarr=after.split('')
                    let firstcap=afterarr[0].toUpperCase()
                    afterarr.splice(0,1,firstcap)
                    let afterstr=afterarr.join('')
                //poner la paralabra de after con mayuscula en la oracion
                    arr.splice(i,1,afterstr)

            }else if(!captest.test(before) && captest.test(after)){
                        
                //transformar after a que tenga mayuscula
                    let afterarr=after.split('')
                    let firstcap=afterarr[0].toLowerCase()
                    afterarr.splice(0,1,firstcap)
                    let afterstr=afterarr.join('')
                //poner la paralabra de after con mayuscula en la oracion
                    arr.splice(i,1,afterstr)

            }else{
                arr.splice(i,1,after)
            }
        }
    }
    return arr.join(' ')
}

  console.log(myReplace("I think we should look up there", "up", "Down"));

