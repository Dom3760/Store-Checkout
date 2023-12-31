//declaring variables to use on the checkout page
const button = document.getElementById("Add");
const input = document.getElementById("barcodeNum");
const input2 = document.getElementById("quantity");
const container = document.getElementById("cartSection");

const totalBeforeTaxText = document.getElementById("totatBeforeTaxText");
const taxText = document.getElementById("taxText");
const totalText = document.getElementById("totalText");

var totalCost= 0;
var tax = 0;
var subtotal = 0;

var itemsInCart = []

//creating a function to check if the barcode is on the array and will add to the total cost
function addItem() {
    const barcode = input.value;
    const quantity = parseInt(input2.value);

    if (barcode === "") {
        alert("Please enter a barcode number");
        return;
    }
    // nan is not a number
    // if it isnt a number then alert user to add valid number
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity (1-∞)");
        return;
    }
    //arrow function makes it find if item barcode num matches the barcode number that the user entered.
    const currentItem = items.find(item => item.barcodeNum === barcode);

    //if barcode is not found on the list it will alert that the item is not found
    if (!currentItem) {
        alert("Item not found with the given barcode");
        return;
    }

    const existingCartItem = itemsInCart.find(cartItem => cartItem.item === currentItem);

    if (existingCartItem) {
        // if item is already in the cart, update quantity
        existingCartItem.quantity += quantity;
        existingCartItem.quantityText.innerText = existingCartItem.quantity;
    } else {
        // Item is not in the cart, create a new item container
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item");

        const quantityBox = document.createElement("div");
        quantityBox.classList.add("quantityBox");

        const plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.classList.add("plusButton");

        const minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.classList.add("minusButton");

        const quantityText = document.createElement("p");
        quantityText.classList.add("quantityText");

        const images = document.createElement("img")
        images.classList.add("image")

        quantityText.innerText = quantity;

        itemContainer.appendChild(document.createElement("h2")).innerText = currentItem.name;
        itemContainer.appendChild(images).src = currentItem.image.src;
        itemContainer.appendChild(quantityBox);
        quantityBox.appendChild(minusButton);
        quantityBox.appendChild(quantityText);
        quantityBox.appendChild(plusButton);

        //if the plus button is pushed it will set the parameter to true, if minus is pushed it will set parameter to false
        plusButton.addEventListener("click", () => updateQuantity(true));
        minusButton.addEventListener("click", () => updateQuantity(false));

        itemsInCart.push({ item: currentItem, quantity: quantity, quantityText: quantityText, itemContainer: itemContainer });
        container.appendChild(itemContainer);
    }

    updateCartTotal();
}
//function that will change the quantity of the item in the cart
function updateQuantity(increase) {
    const barcode = input.value;
    const currentItem = items.find(item => item.barcodeNum === barcode);
    const existingCartItem = itemsInCart.find(cartItem => cartItem.item === currentItem);

    if (existingCartItem) {
        if (increase) {
            existingCartItem.quantity++;
        } else {
            existingCartItem.quantity--;

            if (existingCartItem.quantity < 1) {
                existingCartItem.itemContainer.remove();
                itemsInCart = itemsInCart.filter(cartItem => cartItem !== existingCartItem);
            }
        }

        existingCartItem.quantityText.innerText = existingCartItem.quantity;
        updateCartTotal();
    }
}
//function that will update the cost of the items in the cart and display the cost
function updateCartTotal() {
    totalCost = itemsInCart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
    tax = Math.floor(totalCost * 0.09) / 100;
    subtotal = (Math.floor(((totalCost/100) + tax)*100))/100;

    totalBeforeTaxText.innerText = "Total before Tax: $" + (totalCost / 100);
    taxText.innerText = "Tax cost (9%): $" + (tax);
    totalText.innerText = "Subtotal: $" + (subtotal);
}


//making objects so the function has somthing to search for
const handSanitiser = {
    name: "Hand Sanitiser(40 ounce)",
    barcodeNum: "041348001533",
    price: 549,
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
    price: 2599,
    image: {
        src: "pictures/multiportAdapter.png"
    },
    quantity: 0,
    
    description: 
    ["adapter that lets you plug in 3 usb's, an hdmi, an ethernet cord, sd cards(micro and normal), and a usb-c cord"]
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

//event listener that will listen for a click from the add button, and will add items to cart
button.addEventListener("click",addItem);
