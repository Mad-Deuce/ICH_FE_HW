//------------------------------------------------------------------------------------------------

// Задание 1
// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, 
// для второго параметра определите значение по умолчанию. 
// Затем вызовите функцию и выведите результат в консоль.

function sum(arg1, arg2 = 0) {
    return arg1 + arg2;
};
console.log(sum(5, 8));
console.log(sum(7));

//------------------------------------------------------------------------------------------------

// Задача 2
// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов,
// не используя методы массивов.

let numbers = [5, 3, 7, 1, 4, 8, 9, 13];
const calculateSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(calculateSum(numbers));

//------------------------------------------------------------------------------------------------

// Задача 3 *
// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

const students = [
    {
        name: 'studentName1',
        age: 15,
        course: 'course1'
    },
    {
        name: 'studentName2',
        age: 17,
        course: 'course2'
    },
    {
        name: 'studentName3',
        age: 14,
        course: 'course1'
    },
    {
        name: 'studentName4',
        age: 20,
        course: 'course3'
    },
    {
        name: 'studentName5',
        age: 18,
        course: 'course2'
    },
];

const displayStudentInfo = student => {
    console.log(`NAME: ${student.name}`);
    console.log(`AGE: ${student.age}`);
    console.log(`COURCE: ${student.course}`);
    console.log(`-----------------------------`);
};

students.forEach((student, index) => {
    displayStudentInfo(student);
});

//------------------------------------------------------------------------------------------------