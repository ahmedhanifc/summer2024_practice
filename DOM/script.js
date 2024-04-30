// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


para = document.createElement('p')
para.textContent = 'I am Red'
para.style.color = 'red'

container.appendChild(para)

h3 = document.createElement('h3')
h3.textContent = 'I am Blue'
h3.style.color = 'blue'
container.appendChild(h3)


div = document.createElement('div')
div.setAttribute('style','border-color:black; background-color:pink')
div.setAttribute('class','child')

h1 = document.createElement('h1')
h1.textContent = 'I am inside div'
para2 = document.createElement('p')
para2.textContent = 'Me too'

div.appendChild(h1)
div.appendChild(para2)

container.appendChild(div)


const buttons = document.querySelectorAll("button");

