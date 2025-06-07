// let btnMinus = document.querySelector('[data-action="minus"]');
// let btnPlus = document.querySelector('[data-action="plus"]');
// let counter = document.querySelector('[data-current]');

// btnMinus.addEventListener('click', function(){
//     console.log('Click minus')
//     if(parseInt(counter.innerHTML) > 1){
//         counter.innerText = --counter.innerText;
//     }   
// })

// btnPlus.addEventListener('click', function(){
//     console.log('Click plus')
//     counter.innerText = ++counter.innerText;
// })

window.addEventListener('click', function(event){
if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
    let coutWrap = event.target.closest('.count-wrap');
    let counter = coutWrap.querySelector('[data-current]');

    if(event.target.dataset.action === 'plus'){        
        counter.innerText = ++counter.innerText;
    }


    if(event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        } else if(event.target.closest('.card-wrap') && parseInt(counter.innerText)===1){
            console.log('element cart!')
        }
        event.target.closest('.cart-item').remove()

     myFunk();
     cardPrice();

    }

    if(event.target.hasAttribute('data-action') && event.target.closest('.card-wrap')){
     cardPrice();
    }
}
})