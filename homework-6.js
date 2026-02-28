// Задание 3: Создаём обьект моими данными.

const myProfile = {
    firstName: 'АБДУЛЛОХ',
    lastName: 'АБУНАДИР',
    email: 'abufulan@.com',
    phone: '1234567890',
    job: 'Студент',
    position: 'Начинающий разработчик',
    age: 40,
    country: 'Турция',
    city: 'Стамбул',
    relationship: 'Женат'
};
console.log(myProfile);

// Задание 4: Создаём объект со свойствами.

const myCar = {
    brand: 'Chevrolet',
    model: 'Spark',
    year: 2017,
    color: 'Black',
    transmission: 'Manual'
};
myCar.owner = myProfile;
console.log(myCar);

// Задание 5: Создаём функцию для добавления свойства "Максимальная скорость".

function addMaxSpeed(car) {
    if (!('maxSpeed' in car)) {
        car.maxSpeed = 200;
}
}
addMaxSpeed(myCar);
console.log(myCar);

// Задание 6: Создаём функцию, которая выводить значение свойства объекта .

function showPropertyValue(obj, prop) {
    console.log(obj[prop]);
}
showPropertyValue(myCar, 'color');
showPropertyValue(myProfile, 'lastName');

// Задание 7: Создаем массив с названиями продуктов.

const foodList = ['хлеб', 'молоко', 'масло', 'сливки', 'сыр'];
console.log(foodList);

// Задание 8: Создаем массив с разными обълектами у которых свои свойства.

const cars = [
{
    brand: 'Chevrolet',
    model: 'Spark',
    year: 2017,
    color: 'Black',
    transmission: 'Manual'
},
{
    brand: 'Toyota',
    model: 'Aqua',
    year: 2017,
    color: 'Blue',
    transmission: 'Automatic'
},
{
    brand: 'Nissan',
    model: 'March',
    year: 2020,
    color: 'Green',
    transmission: 'Variator'
}
];
cars.push({
    brand: 'Toyota',
    model: 'Carina',
    year: 2015,
    color: 'White',
    transmission: 'Manual'
});
    console.log(cars);

// Задание 9: Создаем массив и обьединяем его с предыдущим массивом.

const electroCars = [
{
    brand: 'Tesla',
    model: 'Model Y',
    year: 2025,
    color: 'Red',
    transmission: 'Automatic'
},
{
    brand: 'Mercedes-Benz',
    model: 'EQS',
    year: 2024,
    color: 'Yellow',
    transmission: 'Automatic'
}
];
const allCars = [...cars, ...electroCars];
console.log(allCars);

// Задание 10: Создаем функцию которая определяет экологичность авто по году выпуска.

function getEcoCars(carsArray) {
    return carsArray.map(car => ({...car,
        isEco: car.year >= 2020}));
}
const carsWithEco = getEcoCars(allCars);
console.log(carsWithEco);
