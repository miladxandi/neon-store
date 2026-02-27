
const itemsHolder = document.querySelector("#items")
const basketItem = document.querySelector("#basket-item")

function getItems(){
    let items = JSON.parse(localStorage.getItem("products"));
    items.forEach((product) => {
        var item = basketItem.cloneNode(true);
        item.classList.remove('d-none');
        item.querySelector('.header').innerHTML = product.title;
        item.querySelector('.item-image').src = product.images[0];
        item.querySelector('.description').querySelector('p').innerHTML = '<div class="ui action input"><button class="ui left labeled icon button">+</button><input type="text" value="'+product.quantity+'"><button class="ui right labeled icon button">-</button></div>';
        item.querySelector('.extra').innerHTML = "$"+product.price;
        itemsHolder.appendChild(item);
    })
}

getItems();
