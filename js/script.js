function emailSubmit() {
  
  // Prevents the form from trying to submit to a server
  event.preventDefault(); 
  
  // "document" is the name of the DOM (THIS ONE DOESN'T CHANGE)
  // "custInfo" is the name of the form
  // "name" is the name of the input
  // "value" is the value within that input (THIS ONE DOESN'T CHANGE)
  var eAddr = document.mailList.email.value
  
  document.querySelector("#signup-confirm").innerHTML = ("Thanks for signing up, " + eAddr + "!")
  
  console.log("Thanks for signing up, " + eAddr + "!")
  
  // This will clear the inputs after you submit (neat!)
  document.mailList.email.value = ""
  
}

// Init array for shopping cart contents
var cartContents = []

// Init $0 value of shopping cart
var totalPrice = 0

function cartAdd (prodName,price) {
  event.preventDefault()
  
  // Set variable to get index of added product
  var i = cartContents.indexOf(prodName)
  
  // If the index doesn't exist, add the product to the array
  if(i == -1) {
    cartContents.push(prodName)
    totalPrice = totalPrice + price
    } 
  // If it's already there, find and remove it
  else {
    cartContents.splice(i,1)
    totalPrice = totalPrice - price
     }
  
  // Console log the number of items in the cart
  // And fix floating point to 2 decimals only
  console.log(cartContents.length + " products for $" + totalPrice.toFixed(2) + " total.")
  
  // Add total number of products in cart next to cart icon
  if(cartContents.length != 0) {
    document.querySelector("#cartcount").innerHTML = ("  (" + cartContents.length + ")")
  }
  // Make the cart number disappear if there's nothing inside
  else {
    document.querySelector("#cartcount").innerHTML = ""
  }

}

function cartReport() {
  console.log("In your cart: " + cartContents.join(", "))
}

// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

