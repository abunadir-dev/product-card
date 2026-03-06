import { comments } from './comments.js';
console.log('Импортированный массив из comment.js', comments);

//Уровень-1. Задание-2: Создание массива с числами от 1-10 и его фильтрация для создания другого массива с числами с5-10.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
const filteredNumbers = numbers.filter(num => num >=5);
console.log( filteredNumbers);

//Уровень-1. Задание-3: Создание массива строк,проветиь массив на наличие определенной сущности.

const animals = [ 'лев', 'медведь', 'лошадь', 'корова', 'бегемот', 'жираф'];
const searchItem = 'лошадь';
const hasAnimal = animals.includes(searchItem);
console.log(`Есть ли "${searchItem}" в списке?`, hasAnimal);

//Уровень-1. Задание-4: Создать функцию, принимающая аргументом массивы выше переворачивать их порядок.

function reverseArray(arr) {
  return [...arr].reverse();
}
const reversedNumbers = reverseArray(numbers);
const reversedAnimals = reverseArray(animals);
console.log('Исходный numbers:', numbers);
console.log('Перевёрнутый numbers:', reversedNumbers);
console.log('Исходный animals:', animals);
console.log('Перевёрнутый animals:', reversedAnimals);


//Уровень-2. Задание-7: Фильтрация комментариев в чьих email есть ".com"

const commentsWithDotCom = comments.filter(comment => comment.email.includes('.com'));
console.log('Комментарии с email .com:', commentsWithDotCom);

//Уровень-2. Задание-8: Изменил postId по усовию id

const updatedComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log('Обновлённые комментарии:', updatedComments);

//Уровень-2. Задание -9: Создание массива состоящего только из id и имени

const arrayIdName = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log('Массив id и name:', arrayIdName);

//Уровень-2. Задание -10: Создание массива с добавлением свойство isInvalid

const commentsIsInvalid = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log('Комментарии с isInvalid:',commentsIsInvalid);
console.log(comments);


//Уровень-3. Задание-11: Массив email чарез reduce и map

const emailsReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log('Email (reduce):', emailsReduce);

const emailsMap = comments.map(comment => comment.email);
console.log('Email (map):', emailsMap);

//Уровень-3. Задание-12: Преобразавание массива emailsMap в строку методами toString и join

const emailString1 = emailsMap.toString();
console.log('Email через toString():', emailString1);
const emailString2 = emailsMap.join('; ');
console.log('Email через join с точкой с запятой и пробелом:', emailString2);