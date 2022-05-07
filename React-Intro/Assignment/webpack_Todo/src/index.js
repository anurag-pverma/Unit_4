import  "./style.css"
import logo from "./todo.png"

const root = document.getElementById('root');

let header = document.createElement('div');
header.className = 'header';

let todoImg = document.createElement('img');
todoImg.src = logo;
todoImg.classList.add('todo');

let head = document.createElement('h1')
head.innerText = "Create your Todo List"

let inputBox = document.createElement('div');
inputBox.classList.add("inputBox");

let input = document.createElement('input');
input.classList.add('input');
input.type = 'text';



let output = document.createElement('div');
output.classList.add("output")

let btn = document.createElement('button');
btn.innerText = "Create"
btn.onclick = () =>{
    let inpValue = input.value;
    output.innerText = inpValue
    console.log(input.value);  
};
header.append(todoImg,head)
inputBox.append(input,btn)
root.append(header,inputBox,output);
