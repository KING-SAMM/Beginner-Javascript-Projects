// Assuming you have an element with the ID "myElement"
const readMore = document.getElementById('readMore');
readMore?.setAttribute("href", `/posts/51`);

// Create a new click event
const clickEvent = new MouseEvent('click', {
bubbles: true,
cancelable: true,
});

// Dispatch the click event on the readMore
readMore?.dispatchEvent(clickEvent);