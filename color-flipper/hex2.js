/**
 =======================================================================
    Dynamically generate 6-digit hexadecimal color values - ES6 Version
 =======================================================================
 */

 const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
 let hexDigits = [1, 2, 3, 4, 5, 6];
 
 const btn = document.getElementById('btn');
 const color = document.querySelector('.color');
 
 btn.addEventListener('click', () => {
     color.textContent = '#';    
 
     hexDigits.forEach(myFunction)
 
     document.body.style.backgroundColor = color.textContent;
 })
 
 function getRandomNumber() {
     return Math.floor(Math.random() * hex.length);
 }

 function myFunction(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    color.textContent += hex[randomNumber];
}
 