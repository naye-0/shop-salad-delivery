let cartWrap = document.querySelector('.card-wrap');

window.addEventListener('click', function(e){
    if(e.target.hasAttribute('data-cart')){
        console.log('click btn')
        let card = e.target.closest('.card');
        
        let productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.poduct-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            textCount: card.querySelector('.text-count').innerText,
            counter: card.querySelector('[data-current]').innerText,
            weight: card.querySelector('.price-weight').innerText,
            price: card.querySelector('.price-currency').innerText,
        }       
        console.log(productInfo)
        // проверям есть ли товар в корзине
        let itemCart = cartWrap.querySelector(`[data-id='${productInfo.id}']`);
        console.log(itemCart)

        if(itemCart){
            let counterEl = itemCart.querySelector('[data-current]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else{
            
        let cartHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item-img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
        </div>
        <h3 class="cart-item-title">${productInfo.title}</h3>
        <p class="cart-item-weight">1шт/${productInfo.price}</p>
        <div class="cart-item-det">
            <div class="items count-wrap">
                <div class="item-control" data-action="minus">-</div>
                <div class="item-current" data-current>${productInfo.counter}</div>
                <div class="item-control" data-action="plus">+</div>
            </div>
            <div class="price">
                <div class="price-currency">${productInfo.price}</div>
            </div>
        </div>
    </div>
        `
        cartWrap.insertAdjacentHTML('beforeend', cartHTML)
    }
    card.querySelector('[data-current]').innerText = '1';

    myFunk();
    cardPrice();

        }

})