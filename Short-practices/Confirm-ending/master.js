function confirmEnding(str, target) {
    let re=new RegExp(target+'$','i');
    return re.test(str)
    }

    console.log(confirmEnding("cat", "t"));