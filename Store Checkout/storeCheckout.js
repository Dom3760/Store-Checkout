//declaring variables to use on the checkout page
const button = document.getElementById("Add")
const input = document.getElementById("barcodeNum");
const input2 = document.getElementById("quantity");
const container = document.getElementById("cartSection")

const plusButton = document.createElement("button")
plusButton.innerText = "+"
const minusButton = document.createElement("button")
minusButton.innerText = "-"

var totalCost= 0;

//creating a function to check if the barcode is on the array and will add to the total cost
function addItem()
{
    const barcode = input.value;
    const quantity = input2.value
    console.log("This is working")

    if(barcode === "")
    {
        console.log("hi")
    }
    console.log(barcode)
    for (var i = 0; i < items.value; i++)
    {
        if(barcode === items[i].barcodeNum)
        {
            console.log("This is working")
            const Title = document.createElement("h2")
            const itemContainer = document.createElement("div")
            itemContainer.classList.add("item")
            itemContainer.textContent("hello")

            container.appendChild(itemContainer);
            itemContainer.appendChild (Title);
            Title.innerText = (items[i].name);
            itemContainer.appendChild (plusButton);
            itemContainer.appendChild (minusButton);

            console.log("This is working")
            break;
        }
    }
    console.log(items[i])
    console.log(items[i].barcodeNum)
}


const handSanitiser = {
    name: "Hand Sanitiser",
    barcodeNum: "041348001533",
    price: 549,
    description: 
    ["40-Ounce bottle of hand sanitiser."]
};

const multiportAdapter = {
    name: "Multiport Adapter",
    barcodeNum: "X0032YGP2T",
    price: 2599,
    
    description: 
    ["40-Ounce bottle of hand sanitiser"]
};

items = [handSanitiser,multiportAdapter]

button.addEventListener("click",addItem)
