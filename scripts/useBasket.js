const basketItem = document.querySelector("#item")
const basketCard = document.querySelector("#cart")
const totalQuantity = document.querySelectorAll(".total-quantity")
const emptyBasketBox = document.querySelector(".cart-empty-state")

$('.ui.dropdown.cart-wrapper').dropdown();

function refreshBasket(){
    let addedItems = JSON.parse(localStorage.getItem("products"));
    basketCard.innerHTML = "";
    totalQuantity.forEach((element) => {
        element.innerHTML = addedItems.length;
    })
    if (addedItems.length>=1){
        emptyBasketBox.classList.add("d-none")
    }
    addedItems.forEach((product, productIndex) => {
        var item = basketItem.cloneNode(true);
        item.classList.remove('d-none');
        item.querySelector('.header').innerHTML = product.title;
        item.querySelector('.description').innerHTML = product.quantity;
        item.querySelector('.extra').innerHTML = "$"+product.price;
        basketCard.appendChild(item);
    })
}

refreshBasket();
