const services = [

    {
        id:1,
        name:"Dry Cleaning",
        price:200
    },

    {
        id:2,
        name:"Wash & Fold",
        price:100
    },

    {
        id:3,
        name:"Ironing",
        price:30
    },

    {
        id:4,
        name:"Stain Removal",
        price:500
    },

    {
        id:5,
        name:"Leather Cleaning",
        price:999
    },

    {
        id:6,
        name:"Wedding Dress Cleaning",
        price:2800
    }

];

let cart = [];

const servicesDiv =
document.getElementById("services");

function displayServices(){

    services.forEach(service => {

        servicesDiv.innerHTML += `

            <div class="service">

                <div>
                    <strong>
                        ${service.name}
                    </strong>

                    <p>
                        ₹${service.price}
                    </p>
                </div>

                <button
                onclick="addItem(${service.id})">
                    Add Item
                </button>

            </div>

        `;

    });

}

displayServices();

function addItem(id){

    const item =
    services.find(service =>
        service.id === id
    );

    cart.push(item);

    renderCart();

}

function removeItem(index){

    cart.splice(index,1);

    renderCart();

}

function renderCart(){

    const cartItems =
    document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `

            <tr>

                <td>
                    ${index+1}
                </td>

                <td>
                    ${item.name}
                </td>

                <td>
                    ₹${item.price}
                </td>

                <td>

                    <button
                    class="remove-btn"
                    onclick="removeItem(${index})">

                        Remove

                    </button>

                </td>

            </tr>

        `;

    });

    document.getElementById("total")
    .textContent = total;

}

document
.getElementById("bookBtn")
.addEventListener(
"click",
()=>{

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    if(
        name === "" ||
        email === "" ||
        phone === ""
    ){
        alert(
            "Please fill all fields"
        );

        return;
    }

    if(cart.length === 0){

        alert(
            "Please add services first"
        );

        return;

    }

    alert(
        `Booking Successful!

Name: ${name}

Services: ${cart.length}

Total: ₹${document.getElementById("total").textContent}`
    );

});