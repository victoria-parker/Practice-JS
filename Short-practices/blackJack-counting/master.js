var count=0;


/*    +1---->2, 3, 4, 5, 6
    0----->7, 8, 9
    -1----->10, 'J', 'Q', 'K', 'A' */

function countCards(card){
    if(card>=2 && card<=6){
        return count++;
    }else if(card>=7 && card<=9){
        return count
    }else if(card==10 || card=='J'|| card=='Q'|| card=='K'|| card=='A'){
        return count--;
    }
}

countCards(3)
countCards(7)
countCards(4)
countCards('Q')
console.log(count)