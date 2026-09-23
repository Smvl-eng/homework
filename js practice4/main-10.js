// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "kirill",
  age: 17,
  isProgrammer: false,
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const myObject = {};

function isEmpty(object) {
  for (const check in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(myObject));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Название",
  description: "Описание",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  const newObject = {
    ...object,
    ...modifications,
  };

  return newObject;
}

const modifiedTask = cloneAndModify(task, {
  isCompleted: false,
});

for (const key in modifiedTask) {
  console.log(key, modifiedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const object = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

function callAllMethods(object) {
  for (const methods in object) {
    if (typeof object[methods] === "function") {
      object[methods]();
    }
  }
}

callAllMethods(object);
