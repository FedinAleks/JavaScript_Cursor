do { numberN = Number(prompt("Введіть значення N:"))
    console.log(`Число N:`, numberN)
}
while (isNaN(numberN) || !Number.isInteger(numberN))

do { numberM = Number(prompt("Введіть значення M:"))
    console.log(`Число M:`, numberN)
}
while (isNaN(numberM) || !Number.isInteger(numberM))

let skipNumbers = confirm(`Пропускати парні числа?`)

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