const x = 1;

function a() {
  const y = 2;
  output(y)
}

function b() {
  const z = 3;
  output(z)
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
  return value;
}

function pow(x,n){
    total = 1;
    for(let i =1; i<=n; i++){
        total = total * x
    }

    return total
}