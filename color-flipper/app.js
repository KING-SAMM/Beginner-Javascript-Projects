const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "orange", "black", "pink", "teal", "tomato", "blue", "gray", "aqua", "brown", "blueviolet", "indigo", "purple", "magenta", "mediumblue", "midnightblue", "navy", "seagreen", "skyblue", "violet", "darkorchid", "darkgoldenrod", "darkcyan", "cyan", "darkorange", "darksalmon", "darkolivegreen", "dimgray", "dodgerblue", "darkslategray", "darkslateblue", "deeppink", "fuchsia", "forestgreen", "gold", "ghostwhite", "greenyellow", "honeydew", "hotpink", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lightgoldenrodyellow", "lemonchiffon", "lightblue", "lightchoral", "lightcyan"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number beteen 0 - lenght of colors array
    let randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

}) 

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

