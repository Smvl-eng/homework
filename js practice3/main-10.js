// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  basePrice = +prompt("Введите базовую стоимость товара");
  discountPercent = +prompt("Введите процент скидки");
  taxRate = +prompt("Введите налогую ставку");

  const finalPrice = basePrice - discountPercent + taxRate;
  return finalPrice;
}

console.log(`Итоговая цена состовляет - ${calculateFinalPrice()}`);

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, password) {
  userName = prompt("Введите имя пользователя");
  password = +prompt("Введите ваш пароль");

  if (userName === "admin" && password === 12345) {
    return console.log("Доступ разрешен");
  } else {
    return console.log("Доступ запрещен");
  }
}

checkAccess();

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(dayTime) {
  dayTime = +prompt("Введите текущее время суток");

  if (dayTime <= 5) {
    return console.log("Ночь");
  } else if (dayTime <= 11) {
    return console.log("Утро");
  } else if (dayTime <= 17) {
    return console.log("День");
  } else if (dayTime <= 23) {
    return console.log("Вечер");
  } else if (dayTime > 23) {
    return console.log("Некорректное время суток");
  }
}

getTimeOfDay();

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
  start = +prompt("Введите начальное число");
  end = +prompt("Введите конечное число");

  for (let i = start; i <= end; i++)
    if (i % 2 === 0) {
      return i;
    }
  return `Чётных чисел нет`;
}

console.log(findFirstEven());
