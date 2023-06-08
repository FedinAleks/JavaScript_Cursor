let orange = 15.678
let banana = 123.965
let lemon = 90.2345

let maxPrice = Math.max (orange, banana, lemon)
console.log(`max price`, maxPrice)

let minPrice = Math.min (orange, banana, lemon)
console.log(`min price`, minPrice)

let sum = orange + banana + lemon
console.log(`total sum`, sum)

let sumToFloor = Math.floor(orange) + Math.floor(banana) + Math.floor(lemon)
console.log(`sum without a penny`, sumToFloor)

let sumToHundred = Math.round(sum / 100) * 100
console.log(`sum rounded to hundred`, sumToHundred)

let checkNumber = Math.floor(sum) % 2 === 0
console.log(`even or odd`, checkNumber)

let change = 500 - sum
console.log(`change`, change)

let calculateAverage = (sum / 3) .toFixed(2)
console.log(`average`, calculateAverage)

function applyDiscount(sum,discoundPercentage) {
    let discountSum = sum * (discoundPercentage / 100)
    let discountedSum = sum - discountSum
    return discountedSum
}
let discoundPercentage = (Math.random() * 80).toFixed(2)
let finalSum = applyDiscount (sum, discoundPercentage).toFixed(2)
console.log(`total sum`, sum)
console.log(`ramdom discount`,discoundPercentage)
console.log(`sum with discount`, finalSum)

function calculateNetProfit (priceWithDiscount, sum) {
    let sumPrice = sum / 2
    return priceWithDiscount - sumPrice
}
let payWithDiscount = 80
let price = 100
let Profit = calculateNetProfit (payWithDiscount, price)
console.log(`payment with discount`, payWithDiscount)
console.log(`firstly price`, price / 2)
console.log(`Clear profit`,Profit)

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
    Ціна зі знижкою: ${payWithDiscount} <br>
    Чистий прибуток: ${Profit}`
)
