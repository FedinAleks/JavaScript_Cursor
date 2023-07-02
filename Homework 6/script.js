const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

    /* Function 1  Створіть функцію getSubjects(students[0] --> 
    ["Math", "Algorithms", "Datascience"] - яка повертає список предметів 
    для конкретного студента.
    Зверніть увагу – назву предмету необхідно повертати з великої літери, 
    а _ – замінити на пробіл */

function getSubjects(student) {
    const subjects = student.subjects;
    const subjectName = Object.keys(subjects);

    const formatedSubjects = subjectName.map(subjectName => {
        const formatedName = subjectName.replace(`_`, ` `);
        return formatedName.charAt(0).toUpperCase() + formatedName.slice(1);
    });
    return formatedSubjects
}
console.log(`Функція №1- getSubjects`, getSubjects(students[0]))

    /*Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
    середню оцінку по усім предметам для переданого студента НЕ МАСИВА
    СТУДЕНТІВ.
    Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
    попередніх домашніх завданнях*/

function getAverageMark(student) {
    const subjects = student.subjects;
    let totalMarks = [];
    for (let subject in subjects) {
        totalMarks.push(...subjects[subject]);
    }
    const sumMarks = totalMarks.reduce((sum, mark) => sum + mark, 0);
    const AverageMark = sumMarks / totalMarks.length;
    return AverageMark.toFixed(2);
}
console.log(`Функція №2 - getAverageMark`,getAverageMark(students[0]));

    /*Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
    "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
    переданому студенту (вам знадобиться функція з попереднього завдання).
    Повинна бути виведена інформація: курс, ім'я, середня оцінка.*/

function getStudentInfo(students) {
    let info = {...students};
    delete info.subjects;
    info.averageMark = getAverageMark(students);
    return info;   
    }
    
console.log('Функція №3 - getStudentInfo', getStudentInfo(students[0]));

    /*4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
    – яка повертає імена студентів у алфавітному порядку.*/

function getStudentsNames(student) {
        return students.map(item => item.name).sort();
}
console.log('Функція №4 - getStudentsNames', getStudentsNames(students));

    /*5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
    кращого студента зі списку по показнику середньої оцінки.*/

function getBestStudent(student) {
    let bestStudent = null;
    let highestAverage = -Infinity;

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const averageMark = getAverageMark(student);

        if (averageMark > highestAverage) {
            highestAverage = averageMark;
            bestStudent = student
        }
    }
    return bestStudent;
}
console.log(`Функція №5 - getBestStudent`, getBestStudent(students))

    /*Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } 
    – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
    повторень.*/

function calculateWordLetters(word) {
    const letterCount = {}
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
    if (letterCount[letter]) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
        }
    }
    return letterCount
}
const word = `тест`;
console.log(`Функція №6 - calculateWordLetters`, calculateWordLetters(word));