let numberN = null
let numberM = null

do { numberN = Number(prompt("Введіть значення N:","Введіть ціле число"))
    console.log(`Число N:`, numberN)
}
while (isNaN(numberN) || !Number.isInteger(numberN) || !numberN) /*{
    numberN = Number(prompt("Введене не правильне число. Спробуйте ще"))

    Привіт! В мене питання - Що я роблю не так? 
    Я хочу, щоб після некоректного вводу, зʼявлялось вікно - "спробуй ще"
    і воно повторювалось поки користувач не введе вірне число

}*/

do { numberM = Number(prompt("Введіть значення M:","Введіть ціле число"))
    console.log(`Число M:`, numberN)
}
while (isNaN(numberM) || !Number.isInteger(numberM) || !numberM)

const skipNumbers = confirm(`Пропускати парні числа?`)

let sum = 0

for (let i = numberN; i <= numberM; i++) {
    if (skipNumbers && i % 2 == 0) {
            continue
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