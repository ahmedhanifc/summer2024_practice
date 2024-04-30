function sum(arr){
    total = 0;
    for(element of arr){
        total += element
    }

    return total
}

function multiply(arr){
    total = 1;
    for(element of arr){
        total *= element
    }    

    return total
}

function power(a,b){
    return a**b;
}

function factorial(n){
    if (n <= 1)
    {
        return 1;
    }
    else{
        return (n * factorial(n - 1));
    }
   
}

const reverseString = function(str) {
    newStr = ''
    for(let i = str.length;i >0; i--){
        newStr += str[i-1]
    }

    return newStr
};

function palindromes(str){
    specialCharacters = [' ','!',',','.']
    newStr = ''
    for(let i = 0; i < str.length; i++){
        if(!specialCharacters.includes(str[i])){
            newStr+= str[i]
        }
    }



}


function fibonacci(n){
    n = Number(n)
    sequence = [0,1]
    if(n < 0) return "OOPS"
    for(let i = 1; i <= 1000; i++){
        sequence.push((sequence[i] + sequence[i - 1]))
    }

    return sequence[n]
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  function getTheTitles(array){
    for(let i = 0; i < books.length; i++){
        array.push(books[i].title)
    }

    return array
  }
  const container = document.querySelector("#container");
