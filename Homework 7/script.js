const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
    return this.tax * salary;
}
const taxesInUkraine = getMyTaxes.call(ukraine, 1789);
const taxesInLatvia = getMyTaxes.call(latvia, 1586);
const taxesInLitva = getMyTaxes.call(litva, 1509)

console.log(`Taxes in Ukraine`, taxesInUkraine);
console.log(`Taxes in Latvia`, taxesInLatvia);
console.log(`Taxes in Litva`, taxesInLitva);

/*Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними
через this*/

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log(`Middle Tax in Ukraine`,getMiddleTaxes.call(ukraine));
console.log(`Middle Tax in Latvia`,getMiddleTaxes.call(latvia));
console.log(`Middle Tax in Litva`,getMiddleTaxes.call(litva));

/*Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
vacancies). Функція повинна викликатись через call та працювати з даними
через this*/

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(`Total Tax in Ukraine`,getTotalTaxes.call(ukraine));
console.log(`Total Tax in Latvia`,getTotalTaxes.call(latvia));
console.log(`Total Tax in Litva`,getTotalTaxes.call(litva));

/*Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval*/

function getMySalary(country) {
    setInterval(() => {
        const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        const taxes = country.tax * salary;
        const profit = salary - taxes;

        console.log({salary, taxes, profit});
    }, 10000);
}
getMySalary(ukraine);
//getMySalary(latvia);
//getMySalary(litva);
