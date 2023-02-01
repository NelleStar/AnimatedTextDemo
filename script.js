// create random RGB
function randomRBG() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// create a way to change each letter independantly
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRBG();
    }
}, 1000);