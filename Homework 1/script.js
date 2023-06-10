const orange = 15.678
const banana = 123.965
const lemon = 90.2345

const maxPrice = Math.max (orange, banana, lemon)
console.log(`max price`, maxPrice)

const minPrice = Math.min (orange, banana, lemon)
console.log(`min price`, minPrice)

const sum = orange + banana + lemon
console.log(`total sum`, sum)

const sumToFloor = Math.floor(orange) + Math.floor(banana) + Math.floor(lemon)
console.log(`sum without a penny`, sumToFloor)

const sumToHundred = Math.round(sum / 100) * 100
console.log(`sum rounded to hundred`, sumToHundred)

const checkNumber = Math.floor(sum) % 2 === 0
console.log(`even or odd`, checkNumber)

const change = 500 - sum
console.log(`change`, change)

const calculateAverage = (sum / 3).toFixed(2)
console.log(`average`, calculateAverage)

function applyDiscount(sum,discoundPercentage) {
    const discountSum = sum * (discoundPercentage / 100)
    const discountedSum = sum - discountSum
    return discountedSum
}
const discoundPercentage = (Math.random() * 80).toFixed(2)
const finalSum = applyDiscount (sum, discoundPercentage).toFixed(2)
console.log(`total sum`, sum)
console.log(`random discount`,discoundPercentage)
console.log(`sum with discount`, finalSum)

const Profit = Math.floor(sum / 2 - ((sum / 100) * discoundPercentage))
console.log(`Clear profit`, Profit)

document.write (
    `Максимальна ціна: ${maxPrice} <br>
    Мінімальна ціна: ${minPrice} <br>
    Вартість всіх товарів: ${sum} <br>
    Вартість всіх товарів без копійок: ${sumToFloor} <br>
    Сума товарів округлена до сотень: ${sumToHundred} <br>
    Чи є сума парним числом: ${checkNumber} <br>
    Решта: ${change} <br>
    Середнє значення цін: ${calculateAverage} <br>
    Знижка: ${discoundPercentage} % <br>
    Ціна зі знижкою: ${finalSum} <br>
    Чистий прибуток: ${Profit}`
)
