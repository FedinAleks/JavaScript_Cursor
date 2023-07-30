function* createIdGenerator() {
    let id = 10;
    while (true) {
      yield id++;
    }
  }
  
  const idGenerator = createIdGenerator();
  
console.log(idGenerator.next().value); 
console.log(idGenerator.next().value); 
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(initialSize) {
    let fontSize = initialSize;
  
    while (true) {
        const change = yield fontSize;
        if (change === "up") {
            fontSize += 2;
        } else if (change === "down") {
            fontSize -= 2;
        }
    }
  }
  
const fontGenerator = newFontGenerator(20);
  
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("up").value);