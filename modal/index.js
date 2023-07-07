// Get the elements
var openModalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementsByClassName('close')[0];

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listeners
openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
