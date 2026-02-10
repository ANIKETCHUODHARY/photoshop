fetch("products.json")
.then(Response => Response.json())
.then(products =>{
   const productlist = document.getElementById("productlist");
   products.forEach(products => {
    const card = `<div class="product-card">
                    <img src="${products.image}">
                    <h3>${products.name}</h3>
                    <p>${"₹"+products.price}</p>
        </div>`
        productlist.innerHTML += card;
    
   });
})
.catch(error => console.log("Error",error));