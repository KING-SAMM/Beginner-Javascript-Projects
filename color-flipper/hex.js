/**
 =========================================================
    Dynamically generate 6-digit hexadecimal color values
 ========================================================
 */
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    color.textContent = '#';    

    for (let i = 0; i < 6; i++) {
        let randomNumber = getRandomNumber();
        console.log(randomNumber);
        color.textContent += hex[randomNumber];
    }

    document.body.style.backgroundColor = color.textContent;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
