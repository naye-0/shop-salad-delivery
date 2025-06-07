function myFunk(){
    let cartWrap = document.querySelector('.card-wrap');
    let cartEmpty = document.querySelector('[data-card-empty]');
    let order = document.querySelector('.order');
    // console.log(order)

    console.log(cartWrap.children.length);

    if(cartWrap.children.length > 0){
        console.log('Не пуста!!!!!!')
        cartEmpty.classList.add('none');
        order.classList.remove('none');
    } else{
        console.log('Пуста!!!!')
        cartEmpty.classList.remove('none');
        order.classList.add('none');
    }
}