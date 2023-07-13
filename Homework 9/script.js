function getRandomColor () {
    const letters = `0123456789ABCDEF`;
    let  color = `#`;
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function changeSquareColor () {
    const squares = document.getElementsByClassName(`square`);

    for (let i = 0; i < 25; i++) {
        const square = squares[i];
        square.style.backgroundColor = getRandomColor();
    }
}

function generateBlocks () {
    const container = document.getElementById(`container`);

    for (let i = 0; i < 25; i++) {
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.style.backgroundColor = getRandomColor();
        container.appendChild(square);
    }
}

generateBlocks();
setInterval(changeSquareColor, 1000);


// Старий код.

/* function generateBlocks () {
    const container = document.getElementById(`container`);

    for (let i = 0; i < 25; i++) {
        const square = document.createElement(`div`);
        square.classList.add(`square`);
        square.style.backgroundColor = getRandomColor();

        const rowNumber = Math.floor(i / 5);

        let row = container.querySelector(`.row-` + rowNumber);
        
        if (!row) {
            row = document.createElement(`div`);
            row.classList.add(`row`);
            row.classList.add(`row-` + rowNumber);
            container.appendChild(row);
        }
        row.appendChild(square);
    }
}

function getRandomColor () {
    const letters = `0123456789ABCDEF`;
    let  color = `#`;
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function generateBlocksInterval () {
    generateBlocks();

    setInterval(() => {
        const container = document.getElementById(`container`);
        container.innerHTML = ``;

        generateBlocks();
    }, 1000);
}

generateBlocksInterval(); */