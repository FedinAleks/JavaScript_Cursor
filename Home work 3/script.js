/* Function 1 (Функція – яка отримує будь-яке число та 
    виводить найбільшу цифру в цьому числі.)*/

function findMaxNumber () {
    let number = null
    while (true) {
        number = prompt(`Введіть число`);
    
        if (!isNaN(number)) {
        break
        }
        alert(`Введіть корректне число`);
    }
    const digits = Array.from(String(number), Number)
    const maxDigit = Math.max(...digits)
    
    console.log(`Введене число:`, number)
    console.log(`Найбільше значення:`, maxDigit) 
}
findMaxNumber()

/* Function 2 (Функція, яка визначає ступінь числа.)*/

function calculatePower () {
    const baseInput = parseFloat(prompt(`Введіть число, для визначення ступеня`))
    const exponentInput = parseInt(prompt(`Введіть ступінь числа`))

    const base = parseFloat(baseInput)
    const exponent = parseInt(exponentInput)

    if (isNaN(base) || isNaN(exponent)) {
        return `Введіть корректні дані`
    }

    let result = 1

    if (exponent >= 0) {
        for (let i = 0; i < exponent; i++) {
            result *= base
        }
    } else {
        for (let i = 0; i > exponent; i--){
        result /= base
        }
    }
    return result
}
console.log(`Cтупінь дорівнює:`, calculatePower())

/* Function 3 (Correct name)*/

function correctName(name) {
    const lowercaseName = name.toLowerCase()
    const formatedName = lowercaseName.charAt(0).toUpperCase() +lowercaseName.slice(1)
    return formatedName
} 
const name = prompt(`Введіть імя`)
const formatedName = correctName(name)
console.log(`Correct Name:`, formatedName)

/* Function 4 (Створити функцію, яка вираховує суму, що залишається після
оплати податку від зарабітньої плати.)*/

function calculateIncome (income, tax) {
    const taxAmount = income * (tax / 100)
    const finalIncome = income - taxAmount
    return finalIncome
}
const income = parseFloat(prompt(`Write income`))
const tax = parseFloat(prompt(`Write tax, %`))

if (isNaN(income) || isNaN(tax)) {
    console.log(`Please, write correct numbers`)
} else {
    const finalIncome = calculateIncome(income, tax)
    console.log(`Sum with tax`, finalIncome)
}

/* Function 5 (Створити функцію, яка повертає випадкове ціле число в
діапазоні від N до M.) */

function getRandomNumber(N, M) {
    const randomNumber = Math.floor(Math.random() * (M - N + 1)) + N
    return randomNumber
}
    const N = parseInt(prompt(`Напишіть нижній діапазон`))
    const M = parseInt(prompt(`Напишіть верхній діапазон`))
    const randomNum = getRandomNumber(N, M)
    console.log(`Випадкове число`, randomNum) 

/* Function 7. Створіть функцію, яка конвертує долари в гривні та навпаки в
залежності від наявності символа $ або UAH в рядку. */

function convertCurrency (amount) {
    const usdTouahRate = 38
    const uahTousdRate = 1 / usdTouahRate

    const input = prompt(`Введіть суму та валюту (наприклад 100$ або 100UAH)`)
    if (!input) {
        return `Введіть рядок, що містить суму та валюту`
    }
    const upperCaseAmount = input.toUpperCase()

    if (upperCaseAmount.includes(`$`)) {
        const dollars = parseFloat(upperCaseAmount.replace(/\D/g, ``))
        const uah = dollars * usdTouahRate
        return `UAH ${uah.toFixed(2)}`
    }   else if (upperCaseAmount.includes(`UAH`)) {
        const uah = parseFloat(upperCaseAmount.replace(/\D/g, ``))
        const dollars = uah * uahTousdRate
        return `$${dollars.toFixed(2)}`
    } else {
        return `Введіть число з символом $ або UAH для розрахунку`
    }
}
console.log(convertCurrency())