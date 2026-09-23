// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

const basePrice = +prompt("Введите базовую стоимость товара");
const discountPercent = +prompt("Введите процент скидки");
const taxRate = +prompt("Введите налогую ставку");

function calculateFinalPrice() {
  const priceAfterDiscount = basePrice * (1 - discountPercent / 100);

  const finalPrice = priceAfterDiscount * (1 + taxRate);
  return finalPrice;
}

console.log(
  `Итоговая цена состовляет - ${calculateFinalPrice(basePrice, discountPercent, taxRate)}`,
);

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const userName = prompt("Введите имя пользователя");
const password = +prompt("Введите ваш пароль");

function checkAccess() {
  if (userName === "admin" && password === 12345) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess(userName, password));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const dayTime = +prompt("Введите текущее время суток");

function getTimeOfDay() {
  if (dayTime <= 5) {
    return "Ночь";
  } else if (dayTime <= 11) {
    return "Утро";
  } else if (dayTime <= 17) {
    return "День";
  } else if (dayTime <= 23) {
    return "Вечер";
  } else if (dayTime > 23) {
    return "Некорректное время суток";
  }
}

console.log(getTimeOfDay(dayTime));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

const start = +prompt("Введите начальное число");
const end = +prompt("Введите конечное число");

function findFirstEven() {
  for (let i = start; i <= end; i++)
    if (i % 2 === 0) {
      return i;
    }
  return `Чётных чисел нет`;
}

console.log(findFirstEven(start, end));
