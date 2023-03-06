function testWebP(callback) {

    var webP = new Image()
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2)
    }
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp')
    }
})

jQuery(document).ready(function ($) {

    const allMinusBtns = document.querySelectorAll('.minus');
    const allPlusBtns = document.querySelectorAll('.plus');
    const forms = document.querySelectorAll('.frm');
    const modal = document.querySelector('.modal');
    const menuIcon = document.querySelector('.header-wrap__menu');
    const menu = document.querySelector('.header-wrap__nav');
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    const valCaptions = document.querySelectorAll('.val');

    setValCaptionsAndRange = (value)=>{
        valCaptions.forEach(caption=>{caption.innerHTML = value+'грн';}); 
        rangeInputs.forEach(range=>{range.value = value;})
        localStorage.setItem('rangeValue', value)
    };

    if (localStorage.getItem('rangeValue') !== null) {
        rangeInputs.forEac
        setValCaptionsAndRange(+localStorage.getItem('rangeValue'))
    }

    if (allMinusBtns !== null) {
        changeRangeInput(allMinusBtns, 'minus');
    }

    if (allPlusBtns !== null) {
        changeRangeInput(allPlusBtns, 'plus');
    }

    if (modal !== null) {
        modal.addEventListener('click', (e) => {
            const target = e.target.classList;
            if (target !== undefined && target[0] === 'modal') {
                modal.classList.remove('modal-active');
            }
        })
    }

    if (menuIcon !== null) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('header-wrap__menu--active');
            menu.classList.toggle('header-wrap__nav--active');
        })
    }

    function changeRangeInput(selector, type) {
        selector.forEach(item => {
            item.addEventListener('click', (e) => {
                const parentWrap = e.target.parentNode.parentNode.parentNode.parentNode;
                const input = parentWrap.querySelector('input[type="range"]');
                const step = Number(input.getAttribute('step'));
                const min = Number(input.getAttribute('min'));
                const max = Number(input.getAttribute('max'));
                const value = Number(input.value);

                if (type === 'minus') {
                    value !== min ? input.value = value - step : input.value = min;
                }
                else if (type === 'plus') {
                    value !== max ? input.value = value + step : input.value = max;
                }

                // parentWrap.querySelector('.val').innerHTML = input.value;

                // rangeInputs.values(input.value)

                setValCaptionsAndRange(input.value)

            })
        })
    }

    if (rangeInputs !== null) {
        rangeInputs.forEach(item => {
            item.addEventListener('input', (e) => {
                // e.target.parentNode.parentNode.querySelector('.val').innerHTML = e.target.value;
                setValCaptionsAndRange(e.target.value)
            })
        })
    }

    $('.reviews-wrap__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

});