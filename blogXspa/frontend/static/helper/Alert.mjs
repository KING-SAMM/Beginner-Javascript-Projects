export default function Alert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.setAttribute('role', 'alert');
    div.appendChild(document.createTextNode(message));

    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.right = '0';
    div.style.zIndex = '999';

    document.body.appendChild(div);

    // Disappear after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}