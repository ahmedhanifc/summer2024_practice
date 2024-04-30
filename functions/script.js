function add7(n){
    return n+7;
}

function multiply(a,b){
    return a*b;
}

function toUpper(str){
    newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i=0){
            newStr += str[i].toUpperCase()
        }
    }
    console.log(str[0])

    return newStr
}