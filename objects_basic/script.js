current_number = 0;
largest_number = 0;
array = [2,5,7,23,11,9,2,1];

for(let item of array){
    current_number = item;
    if(current_number > largest_number){
        largest_number = current_number
    }
}

try {
    let a = undefinedVariable;
} catch(e) {
    console.log(e instanceof ReferenceError)
    console.log(e.message)
}