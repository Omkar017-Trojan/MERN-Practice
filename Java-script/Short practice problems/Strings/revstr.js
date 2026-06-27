// General logic
// let str="trojanjack";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev += str[i];
    
// }    
// console.log(rev)

// Display Logic
let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
let rev =""; //if outside then value in rev remains there
let input = document.querySelector("input").value;
let display = document.getElementById("display");
  
        for(let i=input.length-1;i>=0;i--){
            console.log(input[i])
            rev += input[i];
            display.textContent=rev;
            
        }
});

