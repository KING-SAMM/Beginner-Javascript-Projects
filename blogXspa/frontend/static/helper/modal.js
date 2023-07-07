export default function Modal() {
    // Get the elements
    const openDeleteModalBtn = document.getElementById('openDeleteModal');
    const deleteModalCenter = document.getElementById('deleteModalCenter');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Function to open the modal
    function openModal() {
        deleteModalCenter.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        deleteModalCenter.style.display = 'none';
    }

    // Event listeners
    openDeleteModalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelDeleteBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == deleteModalCenter) {
            closeModal();
        }
    });
}