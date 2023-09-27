const button = document.getElementById('popupbar');
const menu = document.getElementById('popuptable');

let isOpen = false;

button.onclick = function (elem) {
    if (isOpen === false) {
        menu.style.display = 'inline-block';
        isOpen = true;
        
    } else {
        menu.style.display = 'none';
        isOpen = false;
        
    }
}
