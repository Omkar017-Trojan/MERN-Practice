
 let person1={
    name:"omkar",
    age:"19",
    email:"shinolikaromkar1@gmail.com",
    add:"Panvel"
}

// console.log(person1);

// document.getElementById("object").textContent = person1.name;

const input = document.querySelector('input');

const display = document.getElementById("display");

let btn = document.querySelector('button');
// Else can use: let btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    display.textContent = person1[`${input.value}`];
    console.log(person1[`${input.value}`]);
})

console.log(input.value);
