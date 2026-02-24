//Д.З.5_Пункт-3:Создал: функцию с 2 параметрами которая принимает и выводить сообщение в консоль температуру в городе.

function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию`);
}
showWeather(`Стамбул`,5);

//Д.З.5_Пункт-4:Создал: перем.со скоростью света; функцию сравнения скорости.

const speedOfLight = 300000;
function checkSpeed(speed) {
    if (speed > speedOfLight) {
        console.log(`Сверхсветовая скорость `);
    } else if (speed < speedOfLight) {
        console.log(`Субсветовая скорость`);
    } else {
        console.log(`Скорость света`);
    }
}
checkSpeed(100000);
checkSpeed(300000);
checkSpeed(300005);

//Д.З.5_Пункт-5:Создал перем.1-продукт; перем.2-цена; функ.сравнения бюджет для покупки .

const productName = `Финики`;
const productPrice = 150;
function buyProduct(budget) {
    if (budget >= productPrice) {
        console.log(`${productName} Приобретён. Спасибо за покупку !`);
    } else {
        let needed = productPrice - budget;
        console.log(`Вам не хватает ${needed}$, пополните баланс`);
    }
}
buyProduct(200);
buyProduct(100);

//Д.З.5_Пункт-6:Создал функцию приветствия пользователя.

function greetUser(userName) {
    console.log(`Здравствуйте, ${userName}! Добро пожаловать на сайт.`);
}
greetUser('АБДУЛЛОХ');

//Д.З.5_Пункт-7:Создал 3 переменных.

const myFavoriteCity = 'Мекка';
const mySecondFavoriteCity = 'Медина';
let myAge = 40;
console.log(`Я люблю ${myFavoriteCity}!`);
console.log(`Я хочу жить в ${mySecondFavoriteCity}!`);
console.log(`Я АБДУЛЛОХ, мне ${myAge}лет!`);