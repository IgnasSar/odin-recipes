const mainContainer = document.getElementById('mainContainer');
const squareHeight = 40;
const squareWidth = 40;

function squareGenerator(size) {

    mainContainer.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const squareDiv = document.createElement('div');

            squareDiv.className = 'square-div';
            squareDiv.style.width = `${squareWidth}px`;
            squareDiv.style.height = `${squareHeight}px`;

            squareDiv.dataset.darknessLevel = 0;

            squareDiv.addEventListener('mouseover', function () {
                darkenSquare(squareDiv);
            });

            mainContainer.appendChild(squareDiv);
        }
    }
    mainContainer.style.width = `${squareWidth * size}px`;
    mainContainer.style.height = `${squareHeight * size}px`;

}

squareGenerator(16);

const button = document.getElementById('resetButton');

button.addEventListener('click', function () {
    const input = prompt("Enter the amount of squares per side needed: ");
    const size = parseInt(input);

    if (size > 0 && size <= 100) {
        squareGenerator(size);
    }
    else
        alert("Invalid number (max - 100; min - 1)");
});

function darkenSquare(square) {
    let darknessLevel = parseInt(square.dataset.darknessLevel);

    if (darknessLevel < 10) {
        darknessLevel++;
        square.dataset.darknessLevel = darknessLevel;

        const currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
        const newColor = getDarkerColor(currentColor, 0.1);
        square.style.backgroundColor = newColor;
    }
}

function getDarkerColor(rgb, factor) {
    const rgbValues = rgb.match(/\d+/g);
    let red = parseInt(rgbValues[0]);
    let green = parseInt(rgbValues[1]);
    let blue = parseInt(rgbValues[2]);

    red = Math.floor(red * (1 - factor));
    green = Math.floor(green * (1 - factor));
    blue = Math.floor(blue * (1 - factor));

    return `rgb(${red}, ${green}, ${blue})`;
}