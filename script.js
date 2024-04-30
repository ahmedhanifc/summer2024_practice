function add7(n){
    return n+7;
}

function multiply(a,b){
    return a*b;
}


function titleCase(str){
    newStr = ''
    for(let i = 0; i<str.length; i++){
        if(i==0){
            newStr+=(str[i].toUpperCase())
        }
        else{
            newStr+=str[i].toLowerCase()
        }
    }

    return newStr
}

function lastLetter(str){

    return str.slice(-1)
}

const reverseString = function(str) {
    newStr = ''
    for(let i = str.length;i >0; i--){
        newStr += str[i-1]
    }

    return newStr
};

function removeFromArray(arr, ...items){
    arr.sort()
    for(item of items){
        index = arr.indexOf(item)
        frequency = arr.filter(element => element == item).length
        arr.splice(index, frequency)
    }

    return arr
}

function sumAll(a,b){
    total = 0
    if(a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number'){
        return 'Error'
    }
    else if(a < b){
        for(let i = a; i <= b; i++){
            total +=i
        }
    }
    else if(a > b){
        for(let i = a; i >=b; i--){
            total+=i
        }
    }



    return total
}

function leapYears(year){

    if((year % 4 == 0)){
        if(year % 100 == 0){
            return year % 400 == 0? true: false
        }
        return true;
    }
    else{
        return false;
    }


}


function convertToFahrenheit(temp) {
    result = ((9 / 5 * temp) + 32).toFixed(1)
    return Number.isInteger() == true ? Math.round(result):result.toFixed(2)
}

function add(){
    sum = 0
    for(element of arguments){
        sum += element
    }

    return sum;
}
// function subtract(){
//     arr = Array.from(arguments);
//     arr.sort()
//     arr.reverse()
//     total = arr[0]
//     for(let i = 1; i<= arr.length - 1; i++){
//         total -= arr[i]
//     }

//     return total
// }

function subtract(a,b){
    return a - b;
}

function sum(arr){
    total = 0;
    for(element of arr){
        total += element
    }
}




























