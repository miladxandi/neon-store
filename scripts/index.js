// let jObject = {
//     "name" : "Milad",
//     "lastname" : "Xandi",
//     "national_number" : "001859674",
//     "nationality" : "IR",
//     "sub_persons":[
//         {
//             "name" : "Mamad",
//             "lastname" : "Xandi",
//             "national_number" : "001859687",
//             "nationality" : "IR",
//         },
//         {
//             "name" : "Reza",
//             "lastname" : "Xandi",
//             "national_number" : "001859688",
//             "nationality" : "IR",
//         },
//     ]
// }
//
// let arr = [5,7,9,11,13,15,17,19]
//
// console.log(arr[0])
async function fetchProducts() {
    let response = await axios.get("https://api.escuelajs.co/api/v1/products");
    return response.data;
}

const productCard = document.querySelector("#card")
const productImage = document.querySelector("#product-image")

const holder = document.querySelector("#cards-holder")

let products = await fetchProducts();


products.forEach((product, productIndex) => {
    products[productIndex]['quantity'] = 1;
    var currentProductHtml = productCard.cloneNode(true);
    currentProductHtml.classList.remove('d-none');
    currentProductHtml.id = product.id;

    if (product.images && product.images[0])
    {
        var currentImage = productImage.cloneNode(true);
        currentImage.classList.remove('d-none');
        currentImage.style.backgroundImage = "url("+product.images[0]+")";
        currentImage.id = product.id;
        currentImage.classList.remove('hidden');
        currentImage.classList.add('visible');
        currentProductHtml.querySelector("div").appendChild(currentImage);
    }

    // product.images.forEach((image, index) => {
    //
    //
    //     if (index===0){
    //         var currentImage = productImage.cloneNode(true);
    //         currentImage.classList.remove('d-none');
    //         currentImage.style.backgroundImage = "url("+image+")";
    //         currentImage.id = product.id+'-'+index;
    //
    //         currentImage.classList.remove('hidden');
    //         currentImage.classList.add('visible');
    //
    //         currentProductHtml.querySelector("div").appendChild(currentImage);
    //     }
    // })

    currentProductHtml.querySelector('button').addEventListener('click', (e) => {
        console.log('clicked on element '+productIndex+" which is for "+product.title);
        let addedProducts = JSON.parse(localStorage.getItem("products"));

        if(addedProducts===null || addedProducts === undefined || addedProducts.length === 0){
            addedProducts=[products[productIndex]];
        }else{



            // let items = addedProducts.find(p => p.id === products[productIndex].id);
            // console.log(items);
            // if (items!==null && items!==undefined){
            //     console.log(1)
            //     products[productIndex].quantity += items.quantity;
            //     addedProducts.Array.remove(items);
            //     addedProducts.push(products[productIndex]);
            // }
            // else{
            //     addedProducts.push(products[productIndex]);
            // }


            let foundIndex = addedProducts.findIndex(p => p.id === products[productIndex].id);

            if (foundIndex!==-1){
                addedProducts[foundIndex].quantity += 1;
            }
            else{
                addedProducts.push(products[productIndex]);
            }


        }
        localStorage.setItem("products", JSON.stringify(addedProducts));
        refreshBasket();
    })


    currentProductHtml.querySelector('.product-title').innerHTML = product.title;
    currentProductHtml.querySelector('.product-title').href = "/single.html?slug="+product.slug;
    currentProductHtml.querySelector('.product-description').innerHTML = product.description.substring(0, 50)+"...";
    currentProductHtml.querySelector('.product-price').innerHTML = product.price +"$";
    holder.appendChild(currentProductHtml);
})
