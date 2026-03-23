import { cards } from './product-cards.js';
console.log('Импортированный массив из product-cards.js',cards);

//Задание-4: Объект с ключами-названиями продуктов и значениями-описаниями
const productDescriptions = cards.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});
console.log('Описания продуктов:', productDescriptions);

//Задание-5: Функция которая при старте страницы выводитьсообщение.

function getCardCount() {
  let count =prompt('Сколько карточек отобразить? От 1 до 5');
  count = Number(count);
  /*Проверка: если число, меньше 1 или больше 5 - просим снова.*/
  while (isNaN(count) || count < 1 || count > 5) {
    count = prompt('Ошибка! Введите число от 1 до 5');
    count = Number(count);
  }
  return count;
}
function renderCards(products, limit) {
  const container = document.querySelector('.product-card-wrapper');
  if (!container) return;
  let html = '';
  for(let i = 0; i < limit; i++) {
    const product = products[i];
    html += `<div class="product-card">
    <img class="product-card__image" src="${product.image}" alt="${product.name}">
    <p class="product-card__for-skin">${product.forSkin}</p>
    <h3 class="product-card__title">${product.name}</h3>
    <p class="product-card__description">${product.description}</p>
    <p class="product-card__composition">Состав:</p>
    <ul class="product-card__ingredients">${product.composition.map(item => `<li>${item}</li>`).join('')}</ul>
    <div class="product-card__price-wrapper">
    <span class="product-card__price">Цена</span>
    <span class="product-card__price-value">${product.price.toLocaleString('ru-RU')} ${product.currency}</span>
    </div>
    </div>`;
  }
  container.innerHTML = html;
}
const count = getCardCount();
renderCards(cards, count);