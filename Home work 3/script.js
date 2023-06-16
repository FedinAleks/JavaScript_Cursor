function getMaxDigit(number) {
    let digits = String(number).split(``);
    let maxDigit = 0;

    for (let digit of digits) {
        let currentDigit = Number(digit)
        if (currentDigit > maxDigit) {
            maxDigit = currentDigit;
        }
    }
    return maxDigit;
}
let number = 4863
let maxDigit = getMaxDigit
console.log(maxDigit);