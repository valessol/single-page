const displayImg = document.querySelector('#zoom');
const closeButton = document.querySelector('#close-btn');

const zoomIn = (e) => {
    displayImg.className = 'zoom';
    displayImg.innerHTML = `<img class="galery__img" src="./img/food${e}.jpg">`
    closeButton.innerHTML = '<i class="bi bi-x-lg close-btn" onClick="zoomOut()"></i>';
    return;
}

const zoomOut = () => {
   closeButton.innerHTML = '';
   displayImg.classList.add('zoomOut');
   displayImg.innerHTML = '';
   displayImg.classList.remove('zoom')
   return;
}

