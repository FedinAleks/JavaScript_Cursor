// Task 1
/*
function* createIdGenerator() {
    let id = 10;
    while (true) {
      yield id++;
    }
  }
  
  const idGenerator = createIdGenerator();
  
console.log(idGenerator.next().value); 

// Task 2

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
*/

function* newFontGenerator(initialSize) {
  let fontSize = initialSize;
  const defaultSize = initialSize;

  while (true) {
    const change = yield fontSize;
    if (change === "up") {
      fontSize += 2;
    } else if (change === "down") {
      fontSize -= 2;
    } else if (change === "reset") { 
      fontSize = defaultSize;
    }

    document.getElementById("text").style.fontSize = `${fontSize}px`;
    document.getElementById("currentSize").innerText = `Current Size: ${fontSize}px`;
  }
}

const fontGenerator = newFontGenerator(14);

document.getElementById("upButton").addEventListener("click", () => {
  fontGenerator.next("up");
});

document.getElementById("downButton").addEventListener("click", () => {
  fontGenerator.next("down");
});

document.getElementById("resetButton").addEventListener("click", () => {
  fontGenerator.next("reset");
});