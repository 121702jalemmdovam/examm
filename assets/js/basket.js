const proBasket = document.getElementById('proBasket')

function getproducts(){
    proBasket.innerHTML = ''
let cart = JSON.parse(localStorage.getItem('cart'))
cart.map((item,index)=>{
    const box = document.createElement('div')
    box.className = "box col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
    box.innerHTML = `
    <div class="div">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price} Manat</p>
            <p>${item.count} </p>
            <button class="onebtn" onclick="removefrombasket(${index})">Remove cart</div>
    `
    proBasket.appendChild(box)
})
}
getproducts()
function removefrombasket(index){
let cart = JSON.parse(localStorage.getItem('cart')) || []
cart.splice(index,1)
localStorage.setItem('cart',JSON.stringify(cart));
getproducts()
}