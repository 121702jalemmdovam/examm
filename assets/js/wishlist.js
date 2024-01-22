const wishlistdiv = document.getElementById('proWishlist')

function getproducts(){
    proWishlist.innerHTML = ''
let wishlist = JSON.parse(localStorage.getItem('wishlist'))||[]
wishlist.map((item,index)=>{
    const box = document.createElement('div')
    box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    box.innerHTML = `
    <div class="div">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price} Manat</p>
           
            <button class="onebtn" onclick="removefromwishlist(${index})">Remove cart</button>
              </div>
    `
    proWishlist.appendChild(box)
})
}
getproducts()
function removefromwishlist(index){
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
wishlist.splice(index,1)
localStorage.setItem('wishlist',JSON.stringify(wishlist));
getproducts()
}