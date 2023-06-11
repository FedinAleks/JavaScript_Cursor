const N = prompt("Введіть значення N:")

const numberN = parseFloat(N)

if (!isNaN(numberN)) {
    if (Number.isInteger(numberN)) {
    console.log(`Ви ввели вірне число N:`, numberN)
    }   else {
    console.log(`Ви ввели число, але не ціле`, numberN)
    } 
}   else {
    console.log(`Введене не число N`, numberN)
}

const M = prompt("Введіть значення M:")

const numberM = parseFloat(M)

if (!isNaN(numberM)) {
    if (Number.isInteger(numberM)) {
    console.log(`Ви ввели вірне число M:`, numberM)
    }   else {
    console.log(`Ви ввели число, але не ціле`, numberM)
    } 
}   else {
    console.log(`Введене не число M`, numberM)
}

const skipNumbers = confirm(`Чи потрібно пропускати парні числа?`)

let sum = 0

for (let i = numberN; i <= numberM; i++) {
    if (skipNumbers) {
        if (i % 2 === 0) {
            continue
        }
    }
    sum += i
}

console.log(`Чи потрібно пропускати парні числа?`, skipNumbers)
console.log(`Складені числа`, sum)

document.writeln (
    `Перше число: ${numberN}<br/> 
    Друге число: ${numberM}<br/>
    Чи потрібно пропускати парні числа? : ${skipNumbers} <br/>
    Складені числа: ${sum}
    `
)