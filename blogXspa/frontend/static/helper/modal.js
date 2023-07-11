export default function Modal() {
    // Get the elements
    const openDeleteModalBtn = document.getElementById('openDeleteModal');
    const deleteModalCenter = document.getElementById('deleteModalCenter');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Open alert modal
    function openModal() {
        deleteModalCenter.style.display = 'block';
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


// Close alert modal
export function closeModal() {
    deleteModalCenter.style.display = 'none';
}