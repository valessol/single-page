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

document.addEventListener('DOMContenLoaded', fixedNav());

function fixedNav () {
    const header = document.querySelector('header');
    const toTop = document.querySelector('.toTop')

    const intersection = new IntersectionObserver((entries) => {
        //console.log(entries[0]);
        if (!entries[0]. isIntersecting) {
                toTop.classList.remove('add');
        } else {
            toTop.classList.add('add')
        }
    })
    intersection.observe(header);

    //Funcionalidad de toTop
    toTop.addEventListener('click', scrollNav)
}

function scrollNav (e) {
    e.preventDefault();
    const nav = document.querySelector('nav');
    nav.scrollIntoView({
        behavior: 'smooth',
    })
}

//Menu  Hamburguesa

const icon = document.querySelector('.bi-list');
icon.addEventListener('click', menu)

function menu () {
    const menuNav = document.querySelector('.navigation__menu');
    menuNav.classList.toggle('navigation__responsive')

}
