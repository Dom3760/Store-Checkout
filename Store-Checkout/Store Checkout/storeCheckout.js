//declaring variables to use on the checkout page
const button = document.getElementById("Add");
const input = document.getElementById("barcodeNum");
const input2 = document.getElementById("quantity");
const container = document.getElementById("cartSection");

const totalBeforeTaxText = document.getElementById("totatBeforeTaxText");
const taxText = document.getElementById("taxText");
const totalText = document.getElementById("totalText");


const image = document.createElement("img");
image.classList.add("image");

const plusButton = document.createElement("button");
plusButton.innerText = "+";

const minusButton = document.createElement("button");
minusButton.innerText = "-";

const quantityText = document.createElement ("p");
quantityText.classList.add("quantityText");

const quantityText = document.createElement ("p")
quantityText.classList.add("quantityText")

var totalCost= 0;
var tax = 0;
var subtotal = 0;

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
            if(items[i].quantity > 0)
            {
                items[i].quantity = quantity
                break;
            }
            var currentItemIndex = i;

            const Title = document.createElement("h2");
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item");

<<<<<<< HEAD
            const quantityBox = document.createElement("div");
            quantityBox.classList.add("quantityBox");
=======
            const quantityBox = document.createElement("div")
            quantityBox.classList.add("quantityBox")
>>>>>>> 47043b3ce7184120dfcbfae0cc56c2710937fc2d


            container.appendChild(itemContainer);
            itemContainer.appendChild (Title);
            Title.innerText = (items[i].name);
            image.src = items[i].image.src;
            itemContainer.appendChild(image);
<<<<<<< HEAD
            
            itemContainer.appendChild (quantityBox);
            items[i].quantity += quantity;
            quantityBox.appendChild (minusButton);
            quantityBox.appendChild(quantityText);
            quantityText.innerText = items[i].quantity;
            quantityBox.appendChild (plusButton);
=======
            image.classList.add("image")
            itemContainer.appendChild (quantityBox)
            
            items[i].quantity += quantity
            quantityBox.appendChild (minusButton);
            quantityBox.appendChild(quantityText)
            quantityText.innerText = items[i].quantity;
            quantityBox.appendChild (plusButton);
            // cost(items[i].price)
>>>>>>> 47043b3ce7184120dfcbfae0cc56c2710937fc2d
            break;
        }
    }
}

function cost()
{
    totalCost += ((items[i].price * quantity)/100)
    tax += ((totalCost * 0.09)/100);
    subtotal += ((totalCost + tax)/100);
    totalCost = (totalCost/100)
            
    totalBeforeTaxText.innerText = "Total before Tax:$" + Math.floor(totalCost);
    taxText.innerText = "Tax cost (9%):$"+ Math.floor(tax)
    totalText.innerText = "Subtotal:$" + Math.floor(subtotal)
}

function plus()
{
    items[currentItemIndex].quantity ++
    quantityText.innerText = items[currentItemIndex].quantity;
}

function minus()
{
    items[currentItemIndex].quantity --
    quantityText.innerText = items[currentItemIndex].quantity;
}


//making objects so the function has somthing to search for
const handSanitiser = {
    name: "Hand Sanitiser(40 ounce)",
    barcodeNum: "041348001533",
    price: 5.49,
    image: {
        src: "pictures/Hand-RX-Hand-Sanitiser.png"
    },
    quantity: 0,

    description: 
    ["40-Ounce bottle of hand sanitiser."]
};

const multiportAdapter = {
    name: "Multiport Adapter",
    barcodeNum: "X0032YGP2T",
    price: 25.99,
    image: {
        src: "pictures/multiportAdapter.png"
    },
    quantity: 0,
    
    description: 
    ["adapter that lets you plug in 3 usb's, and hdmi, and ethernet cord, sd cards(micro and normal), and a usb-c cord"]
};

const  javaScriptTextbook = {
    name: "JavaScript Textbook",
    barcodeNum: "689145740844",
    price: 3495,
    image: {
        src: "pictures/JavaScript-Textbook.png"
    },
    quantity: 0,
    
    description: 
    ["Textbook that teaches java script"]
};

const xeroxPaper = {
    name: "Xerox Paper",
    barcodeNum: "4549292070248",
    price: 1099,
    image: {
        src: "pictures/Xerox-Paper.png"
    },
    quantity: 0,
    
    description: 
    ["package of xerox printer pager"]
};

const firstAidKit = {
    name: "First Aid Kit",
    barcodeNum: "092265222983",
    price: 2099,
    image: {
        src: "pictures/First-Aid-Kit.png"
    },
    quantity: 0,
    
    description: 
    ["A kit for emergency situations to help with wounds and other injuries"]
};

const  boxOfPencils = {
    name: "Box of Pencils (50ct.)",
    barcodeNum: "X002ELVL3J",
    price:1599,
    image: {
        src: "pictures/Pencils.png"
    },
    quantity: 0,
    
    description: 
    ["box of 50 #2 pencils"]
};

const sanitizingWipes= {
    name: "Sanitizing Wipes",
    barcodeNum: "686024002468",
    price: 1099,
    image: {
        src: "pictures/Sanitizer-Wipes.png"
    },
    quantity: 0,
    
    description: 
    ["Sanitizing wipes to clean your hands"]
};

const N95FaceMasks = {
    name: "N95 Face Masks",
    barcodeNum: "860004186236",
    price: 1599,
    image: {
        src: "pictures/N95-mask.png"
    },
    quantity: 0,
    
    description: 
    ["Face mask that filters air"]
};

const  kleenex= {
    name: "Kleenex",
    barcodeNum: "036000214000",
    price: 399,
    image: {
        src: "pictures/kleenex.png"
    },
    quantity: 0,
    
    description: 
    ["Box with tissues to wipe your nose with"]
};

const  handSanitizer= {
    name: "Hand Sanitizer",
    barcodeNum: "8809693254156",
    price: 799,
    image: {
        src: "pictures/Hand-Sanitizer(small).png"
    },
    quantity: 0,
    
    description: 
    ["Used to clean your hands "]
};

const  printerPaper= {
    name: "Printer Paper",
    barcodeNum: "036500060480",
    price: 999,
    image: {
        src: "pictures/Printer-Paper.png"
    },
    quantity: 0,
    
    description: 
    ["pack of printer paper"]
};

const  brushPens= {
    name: "Brush Pens",
    barcodeNum: "085014561877",
    price: 1099,
    image: {
        src: "pictures/Brush-Pens.png"
    },
    quantity: 0,
    
    description: 
    ["marker like pens that can make art."]
};

const  Scissors= {
    name: "Scissors (20ct.)",
    barcodeNum: "B07G6JT1XS",
    price: 2399,
    image: {
        src: "pictures/Scissors (20ct.).png"
    },
    quantity: 0,
    
    description: 
    ["pack of 20 scissors used to cut things"]
};

const iOSProgrammingTextbook = {
    name: "iOS Programming Textbook",
    barcodeNum: "9780134682334",
    price: 11999,
    image: {
        src: "pictures/iOS Programming Textbook.png"
    },
    quantity: 0,
    
    description: 
    ["ios programming book to make things on ios"]
};

const  spiralNotebook= {
    name: "Spiral Notebook",
    barcodeNum: "718103230759",
    price: 199,
    image: {
        src: "pictures/Spiral Notebook.png"
    },
    quantity: 0,
    
    description: 
    ["notebook with pages to do anything on"]
};

//make an array that will store the objects
const items = [handSanitiser, multiportAdapter, javaScriptTextbook, xeroxPaper, firstAidKit, boxOfPencils, sanitizingWipes,
        N95FaceMasks, kleenex, handSanitizer, printerPaper, brushPens, Scissors, iOSProgrammingTextbook, spiralNotebook]

//event listener that will listen for a click from the add button
button.addEventListener("click",addItem);
plusButton.addEventListener("click",plus);
minusButton.addEventListener("click",minus);
