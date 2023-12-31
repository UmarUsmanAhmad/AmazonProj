function ShowCartbox(event) {
    const cartBox = document.getElementById('cart-box');
    const cartIcon = document.querySelector('.Cart');
  
    if (cartIcon.contains(event.target)) {
      cartBox.style.visibility = 'visible';
      cartBox.style.right = '0';
    } else if (!cartBox.contains(event.target)) {
  
      cartBox.style.visibility = 'hidden';
      cartBox.style.right = '0';
    }
  }
  
  document.addEventListener('click', ShowCartbox);
  
  var x = 0;
document.getElementById("Totalitems").innerText = x;

function additems(boxContent) {
  const cartItems = document.getElementById("cart-items");
  const numberswithcart = document.getElementById("numbers");
  const listItem = document.createElement("li");
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("cart-item");
  itemDiv.innerHTML = boxContent.innerHTML;
  itemDiv.dataset.quantity = 1;
  x = x + 1;
  numberswithcart.innerHTML = x;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    listItem.remove();
    x = x - 1;
    numberswithcart.innerHTML = x;
    document.getElementById("Totalitems").innerText = x;
  });

  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add("quantity-container");
  const minusButton = document.createElement("button");
  minusButton.textContent = "-";
  minusButton.classList.add("minus-button");
  const quantityText = document.createElement("span");
  quantityText.textContent = itemDiv.dataset.quantity;
  const plusButton = document.createElement("button");
  plusButton.textContent = "+";
  plusButton.classList.add("plus-button");

  minusButton.addEventListener("click", function () {
    const quantity = parseInt(itemDiv.dataset.quantity, 10);
    if (quantity > 1) {
      itemDiv.dataset.quantity = quantity - 1;
      quantityText.textContent = itemDiv.dataset.quantity;
    }
  });

  plusButton.addEventListener("click", function () {
    itemDiv.dataset.quantity = parseInt(itemDiv.dataset.quantity, 10) + 1;
    quantityText.textContent = itemDiv.dataset.quantity;
  });

  quantityContainer.appendChild(minusButton);
  quantityContainer.appendChild(quantityText);
  quantityContainer.appendChild(plusButton);

  itemDiv.appendChild(quantityContainer);
  itemDiv.appendChild(removeButton);

  const seeMoreLink = itemDiv.querySelector("a");
  if (seeMoreLink) {
    seeMoreLink.remove();
  }

  listItem.appendChild(itemDiv);
  listItem.removeEventListener("click", additems);
  cartItems.appendChild(listItem);
  document.getElementById("Totalitems").innerText = x;
}

function increaseQuantity(event) {
  event.preventDefault();

  const quantity = parseInt(this.parentNode.dataset.quantity, 10) || 0;
  
  const newQuantity = quantity + 1;

  this.parentNode.dataset.quantity = newQuantity;

  this.innerText = "+" + newQuantity;
}

function loginwebsitefun(){
  window.location.href= "../Login/index.html";
}
function homepage(){
  window.location.href= "../mainpage/index.html";

}

let phones=[{
  id:'1',
  Name:'Iphone14pro' ,
  Price:'14000',
  image:"./firstimage.webp",
},{
  id:'2',
  Name:'Iphone13' ,
  Price:'13000',
  image:"./iphone13.avif",
},{ 
   id:'3',
Name:'Iphone12' ,
Price:'12000',
image:"./iphone12.avif",
},
{  
  id:'4',
Name:'Iphone11' ,
Price:'11000',
image:"./iphone11.webp",
},

{  id:'5',
Name:'Galaxys23' ,
Price:'12000',
image:"./Samsung23.avif",
},
{  id:'6',
Name:'Galaxys22' ,
Price:'11000',
image:"./S22.avif",
},
{  id:'7',
Name:'Galaxys21' ,
Price:'10000',
image:"./s21.webp",
},
{  id:'8',
Name:'Galaxys20' ,
Price:'9000',
image:"./s20.jpg",
}];

let shopContainer= document.getElementById('shopContainer');

const generatedivs=()=>{
return (shopContainer.innerHTML=phones.map((x)=>{
  return `
  <div class="box1 box">
                <div class="box-content">
                    <h2>${x.Name}</h2>
                    <div ><img class="Mobiles" src=${x.image}></div>
                    <p class="price">$${x.Price}</p>
                    <a onclick="additems(this.parentNode)">Add</a>
                </div>
            </div>`;
}).join(''));

} ;

generatedivs();