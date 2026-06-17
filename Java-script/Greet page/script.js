let red=document.getElementById('box1');
red.addEventListener('click', () =>{
  red.style.backgroundColor="red";
  red.style.color="white";
  red.style.borderWidth="0px"
});

let blue=document.getElementById('box2');
blue.addEventListener('click', () =>{
  blue.style.backgroundColor="blue";
  blue.style.color="white";
  blue.style.borderWidth="0px"
});

let green=document.getElementById('box3');
green.addEventListener('click', () =>{
  green.style.backgroundColor="green";
  green.style.color="white";
  green.style.borderWidth="0px"
});

let yellow=document.getElementById('box4');
yellow.addEventListener('click', () =>{
  yellow.style.backgroundColor="yellow";
  yellow.style.borderWidth="0px"
});

let input=document.getElementById('name');
let Name=document.getElementById('heading');
let btn=document.getElementById('btn');

btn.addEventListener('click', ()=>{
  if (input.value == ""){
    Name.innerText= "Hello";
  } else {
    Name.innerText="Hello, " + input.value;
  }
});