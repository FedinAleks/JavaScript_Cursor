// Function 1       getRandomArray
function getRandomArray() {
    const length = 15
    const min = 1
    const max = 100

    let randomArray = []

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        randomArray.push(randomNumber)
    }
    return randomArray
}
let myArray = getRandomArray()
console.log(myArray)

// Function 2       getModa

function getModa (...numbers) {
    const integerNumbers = numbers.filter(num => Number.isInteger(num))
    const object = {}

    integerNumbers.forEach(num => {
        if (object[num]) {
            object[num]++
        } else {
            object[num] = 1
        }
    })
let maxObject = 0
let modes = []
for (const num in object) {
    if (object[num] > maxObject) {
        maxObject = object[num]
        modes = [num]
    } else if (object[num] === maxObject) {
        modes.push(num)
    }
}
return modes
}
const numbers = [6, 2, 55, 11, -78, 2, 55.2, 77, 57, 87, 23, 2, 56, 3, 2, 77, 77, 77, 77]
console.log(getModa(...numbers))

// Function 3      getAverage

function getAverage (...numbers) {
    const integerNumbers = numbers.filter(num => Number.isInteger(num))

    if (integerNumbers.length === 0) {
        return 0
    }
    const sum = integerNumbers.reduce((sum, num) => sum + num, 0)
    const average = sum / integerNumbers.length
    return average.toFixed(2)
}
console.log(getAverage(...numbers))

// Function 5       filterEvenNumbers

function filterEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 === 0)
}
console.log(filterEvenNumbers(...numbers))

// Function 6       countPositiveNumbers

function countPositiveNumbers(...numbers) {
    return numbers.filter(num => num > 0).length
}
console.log(countPositiveNumbers(...numbers))

// Function 9       divideByThree(word)
function divideByThree(word) {
    const sanitizedWord = word.replace(/ /g, "").toLowerCase()
    const emptyMassive = []

    let i = 0 
    while (i < sanitizedWord.length) {
        const massive = sanitizedWord.substr(i, 3)
        emptyMassive.push(massive)
        i += 3
        }
    return emptyMassive
}
const result = divideByThree("Commander")
console.log(result)