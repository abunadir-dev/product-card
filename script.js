// 1. Сначала объявляем константы (цвета и кнопки, которые ЕСТЬ в HTML сразу)
const blueHashColor = '#000fff';
const greenHashColor = '#00ff44';

const recolorFirstCardButton = document.getElementById('recolor-firs-card-button');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const openGoogleButton = document.getElementById('open-google-button');
const colorButton = document.getElementById('toggle-color-button');
const mainTitle = document.querySelector('.product-selection__title');

// 2. Логика для первой кнопки (ПЕРЕКРАСИТЬ ОДНУ)
recolorFirstCardButton.addEventListener('click', () => {
    // Ищем карточку ТОЛЬКО в момент клика, когда она уже создана через prompt
    const firstProductCard = document.querySelector('.product-card');
    if (firstProductCard) {
        firstProductCard.style.backgroundColor = blueHashColor;
    } else {
        console.log('Карточки еще не созданы! Сначала введи число в prompt.');
    }
});

// 3. Логика для второй кнопки (ПЕРЕКРАСИТЬ ВСЕ)
recolorAllCardButton.addEventListener('click', () => {
    // Ищем список всех карточек тоже внутри клика
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => card.style.backgroundColor = greenHashColor);
});

// 4. Логика Google
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google?');
    if (answer === true) {
        window.open('https://google.com');
    } else {
        console.log('Пользователь отменил переход на Google');
    }
}

// 5. Логика заголовка
if (mainTitle) {
    mainTitle.addEventListener('mouseover', function() {
        console.log(this.textContent);
    });
}

// 6. Переключатель цвета кнопки
colorButton.addEventListener('click', function() {
    this.classList.toggle('button-alternate');
});