function cardPrice(){
    let cartItem = document.querySelectorAll('.cart-item');
    console.log(cartItem);

    let totalPrice = 0;

    cartItem.forEach(function(item){
        console.log(item)

        let amountEl = item.querySelector('[data-current]');
        let priceEl = item.querySelector('.price-currency');

        let allPrice = parseInt(amountEl.innerText)*parseInt(priceEl.innerText);
        console.log(allPrice)
        totalPrice += allPrice;
    })
    console.log(totalPrice)
}