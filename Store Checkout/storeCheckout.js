//declaring variables to use on the checkout page
const button = document.getElementById("Add")
const input = document.getElementById("barcodeNum");
const input2 = document.getElementById("quantity");
const container = document.getElementById("cartSection")

<<<<<<< HEAD
const totalBeforeTaxText = document.getElementById("totatBeforeTaxText")
const taxText = document.getElementById("taxText")
const totalText = document.getElementById("totalText")

=======
>>>>>>> 8bc45181cb4264e4f9b5ce73a51934465d43ed83
const image = document.createElement("img")
const plusButton = document.createElement("button")
plusButton.innerText = "+"
const minusButton = document.createElement("button")
minusButton.innerText = "-"

var totalCost= 0;
var tax = 0
var subtotal = 0
var i;

//creating a function to check if the barcode is on the array and will add to the total cost
function addItem()
{
    const barcode = input.value;
    const quantity = input2.value

    if(barcode === "")
    {
        console.log("hi")
    }
    for (var i = 0; i < items.length; i++)
    {
        if(barcode === items[i].barcodeNum)
        {
            const Title = document.createElement("h2")
            const itemContainer = document.createElement("div")
            itemContainer.classList.add("item");
<<<<<<< HEAD
            const quantityBox = document.createElement("div")
            // quantityBox.classList.add("")
=======
>>>>>>> 8bc45181cb4264e4f9b5ce73a51934465d43ed83

            container.appendChild(itemContainer);
            itemContainer.appendChild (Title);
            Title.innerText = (items[i].name);
            image.src = items[i].image.src;
            itemContainer.appendChild(image);
            image.classList.add("image")
            itemContainer.appendChild (minusButton);
<<<<<<< HEAD
            itemContainer.appendChild (plusButton);
            cost()
=======
            totalCost += ((items[i].price * quantity)/100)
            console.log(totalCost)
            

>>>>>>> 8bc45181cb4264e4f9b5ce73a51934465d43ed83
            break;
        }
    }
}

<<<<<<< HEAD
function cost()
{
    totalCost += (items[i].price * quantity);
    tax += ((totalCost * 0.09)/100);
    subtotal += ((totalCost + tax)/100);
    totalCost = (totalCost/100)
            
    totalBeforeTaxText.innerText = "Total before Tax:$" + Math.floor(totalCost);
    taxText.innerText = "Tax cost (9%):$"+ Math.floor(tax)
    totalText.innerText = "Subtotal:$" + Math.floor(subtotal)
}

=======
>>>>>>> 8bc45181cb4264e4f9b5ce73a51934465d43ed83
//making objects so the function has somthing to search for
const handSanitiser = {
    name: "Hand Sanitiser(40 ounce)",
    barcodeNum: "041348001533",
    price: 549,
<<<<<<< HEAD
    image: {
        src: "pictures/Screen Shot 2023-11-02 at 8.31.16 AM.png"
    },
    description: 
    ["40-Ounce bottle of hand sanitiser."]
        
=======

    description: 
    ["40-Ounce bottle of hand sanitiser."]
    
>>>>>>> 8bc45181cb4264e4f9b5ce73a51934465d43ed83
};

const multiportAdapter = {
    name: "Multiport Adapter",
    barcodeNum: "X0032YGP2T",
    price: 2599,
    
    description: 
    ["40-Ounce bottle of hand sanitiser"]
};

const  javaScriptTextbook = {
    name: "JavaScript Textbook",
    barcodeNum: "689145740844",
    price: 3495,
    
    description: 
    ["Textbook that teaches java script"]
};

const xeroxPaper = {
    name: "Xerox Paper",
    barcodeNum: "4549292070248",
    price: 1099,
    
    description: 
    ["package of xerox printer pager"]
};

const firstAidKit = {
    name: "First Aid Kit",
    barcodeNum: "092265222983",
    price: 2099,
    
    description: 
    ["A kit for emergency situations to help with wounds and other injuries"]
};

const  boxOfPencils = {
    name: "Box of Pencils (50ct.)",
    barcodeNum: "X002ELVL3J",
    price:1599,
    
    description: 
    ["box of 50 #2 pencils"]
};

const sanitizingWipes= {
    name: "Sanitizing Wipes",
    barcodeNum: "686024002468",
    price: 1099,
    
    description: 
    ["Sanitizing wipes to clean your hands"]
};

const N95FaceMasks = {
    name: "N95 Face Masks",
    barcodeNum: "860004186236",
    price: 1599,
    
    description: 
    ["Face mask that filter air"]
};

const  kleenex= {
    name: "Kleenex",
    barcodeNum: "036000214000",
    price: 399,
    
    description: 
    ["Box with tissues to wipe your nose with"]
};

const  handSanitizer= {
    name: "Hand Sanitizer",
    barcodeNum: "8809693254156",
    price: 799,
    
    description: 
    [""]
};

const  printerPaper= {
    name: "Printer Paper",
    barcodeNum: "036500060480",
    price: 999,
    
    description: 
    ["pack of printer paper"]
};

const  brushPens= {
    name: "Brush Pens",
    barcodeNum: "085014561877",
    price: 1099,
    
    description: 
    ["marker like pens that can make art."]
};

const  Scissors= {
    name: "Scissors (20ct.)",
    barcodeNum: "B07G6JT1XS",
    price: 2399,
    
    description: 
    ["pack of 20 scissors used to cut things"]
};

const iOSProgrammingTextbook = {
    name: "iOS Programming Textbook",
    barcodeNum: "9780134682334",
    price: 11999,
    
    description: 
    ["marker like pens that can make art."]
};

const  spiralNotebook= {
    name: "Spiral Notebook",
    barcodeNum: "718103230759",
    price: 199,
    
    description: 
    ["marker like pens that can make art."]
};

//make an array that will store the objects
const items = [handSanitiser, multiportAdapter, javaScriptTextbook, xeroxPaper, firstAidKit, boxOfPencils, sanitizingWipes,
        N95FaceMasks, kleenex, handSanitizer, printerPaper, brushPens, Scissors, iOSProgrammingTextbook, spiralNotebook]

//event listener that will listen for a click from the add button
button.addEventListener("click",addItem)
