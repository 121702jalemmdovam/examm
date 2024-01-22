const proList= document.getElementById('proList')
page=1
limit=4
function getproducts(){
    axios.get(`https://65680f199927836bd97406d3.mockapi.io/username/products?page=${page}&limit=${limit}`)
    .then(res=>{
        products = res.data
        products.map(item=>{
            const box = document.createElement('div')
            box.className = "box col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"
            box.innerHTML = `
            <div class="div">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price} Manat</p>
           
            <button class="onebtn" onclick="addtobasket(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
            <button class="twobtn" onclick="addtowishlist(${item.id})"><i class="fa-regular fa-heart"></i></button> 
              </div>
            `
            proList.appendChild(box)
        })
    })
}
getproducts()





function addtobasket(id) {
    let cart=JSON.parse(localStorage.getItem('cart')) || []
    let productItem = cart.find(item => item.id == id)

    if(productItem){
        productItem.count = (productItem.count || 1) + 1
    }else {
        cart.push(products.find(item => item.id == id))
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    
}



function addtowishlist(id){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productItem = wishlist.find(item => item.id == id)
    
    if(productItem){
        alert('This product has already become a favorite')
    } else {
        wishlist.push(products.find(item => item.id == id)) 
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    }

}