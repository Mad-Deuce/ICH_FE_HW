// Задания 1.\*

// Напишите программу для оценки студентов в зависимости от их баллов. 
// Программа должна принимать на вход количество баллов (целое число) 
// и выводить оценку в виде буквенного символа по следующей шкале:

const points = 91;
// const points = 77;
// const points = -7;

if (points >= 90) {
    console.log('A');
} else if (points >= 80) {
    console.log('B');
} else if (points >= 70) {
    console.log('C');
} else if (points >= 60) {
    console.log('D');
} else if (points >= 0) {
    console.log('F');
} else {
    console.log('¯\\_(ツ)_/¯');
}

// Объявите переменную dayOfWeek и присвойте ей значение от 1 до 7, 
// представляющее день недели (например, 1 - "Понедельник", 2 - "Вторник", и так далее).

// Используя конструкцию switch, определите текущий день недели и выведите его в консоль. 
// (Попробуйте поменять значение переменной dayOfWeek и запустить программу снова.)

let dayOfWeek = 4;

switch (dayOfWeek) {
    case 1: {
        console.log("sunday");
        break;
    }
    case 2: {
        console.log("monday");
        break;
    }
    case 3: {
        console.log("tuesday");
        break;
    }
    case 4: {
        console.log("wednesday");
        break;
    }
    case 5: {
        console.log("thursday");
        break;
    }
    case 6: {
        console.log("friday");
        break;
    }
    case 7: {
        console.log("saturday");
        break;
    }
    default: {
        console.log("error");
        break;
    }
}