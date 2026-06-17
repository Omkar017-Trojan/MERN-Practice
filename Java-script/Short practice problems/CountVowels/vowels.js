let vowels=['a','e','i','o','u'];



function count(){
    let str=document.getElementById("strings").value
    let counter=0;
for(let i=0; i<str.length ;i++){
        if(vowels.includes(str[i])){
            counter ++;
        }
    }
console.log(counter);
document.getElementById("display").innerHTML = "Total vowels are : " + counter;
}



