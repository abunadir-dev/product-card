const recolorFirstCardButton = document.getElementById('recolor-firs-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor ='#000fff'
recolorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueHashColor;
})

const productCards =document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const greenHashColor ='#00ff44'
recolorAllCardButton.addEventListener('click', () => {
    productCards.forEach(
        card => card.style.backgroundColor = greenHashColor
    )
})

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);
function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google,?')
if (answer===true) {
    window.open('https://google.com');
} else {
    console.log('Пользователь отменил переход на Google')
}
}

const mainTitle = document.querySelector('.product-selection__title');
mainTitle.addEventListener('mouseover', function() {
    console.log(this.textContent);
});

const colorButton = document.getElementById('toggle-color-button');
colorButton.addEventListener('click', function() {
    this.classList.toggle('button-alternate');
})