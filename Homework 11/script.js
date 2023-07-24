function getRandomChinese(length) {
    return new Promise((resolve) => {
        let result = '';
        let counter = 0;
  
        const generateChineseCharacter = () => {
            const sign = String(Date.now()).slice(-5);
            result += String.fromCharCode(sign);
            counter++;
  
            if (counter === length) {
                resolve(result);
            } else {
                setTimeout(generateChineseCharacter, 50);
            }
        };
  
        generateChineseCharacter();
    });
};

getRandomChinese(4).then((result) => {
    console.log(result);
});
