let inputs = document.querySelectorAll("input");


inputs.forEach((input) => {
    input.addEventListener('input', (event)=>{
        console.log(event);
        let id = event.target.id;
        let value = event.target.value;
       
        let displayelement = document.getElementById(`out-${id}`);
        if(displayelement){
            displayelement.textContent= value || "-";
        }
        
    })
});