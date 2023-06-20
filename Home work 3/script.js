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

function power (base, exponent) {
    let result = 1

    for (i = 0; i < exponent; i++) {
        result *= base
    }
    return result
}
function PowerResult() {
    const base = parseFloat(prompt(`Введіть число:`))
    const exponent = parseInt(prompt(`Введіть ступінь числа`))

    if (isNaN(base) || isNaN(exponent)) {
        alert (`Введіть корректні дані`)
        return
    }
    const result = power(base, exponent)
    alert(`${base} в ступені ${exponent} дорівнює ${result}`)
    console.log(`Cтупінь дорівнює:`, result)
}
PowerResult() 

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
    const dollarToUAH = 38

    if (amount.indexOf(`$`) !== -1) {
        const dollars = parseFloat(amount.replace(`$`, ``))
        const uah = dollars * dollarToUAH
        return uah.toFixed(2) + `UAH`
    } else if (amount.indexOf(`UAH`) !== -1) {
        const uah = parseFloat(amount.replace(`UAH`, ``))
        const dollars = uah / dollarToUAH
        return dollars.toFixed(2) + `$`
    } else {
        return `Невірний формат значення.`
    }
}
const amount = prompt(`Please write amount (important in $ or UAH!)`)
const convertedAmount = convertCurrency(amount)
console.log(convertedAmount)


