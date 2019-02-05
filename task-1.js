var parag = document.body.appendChild(document.createElement('p'));
parag.innerText = 'Click on me';

var img = document.createElement('img');
img.src = 'https://desenio.co.uk/bilder/artiklar/zoom/pre0019_1.jpg';
img.style.width = '100px';
img.style.transition = 'width 0.5s';

function appearImg (event) {
    document.body.appendChild(img);
}

function disappearImg(event) {
    document.body.removeChild(img);
    this.style.width = "100px";
}

function scaleImg(event) {
    this.style.width = "200px";
}

parag.removeEventListener('click', appearImg);
img.removeEventListener('click', disappearImg);
img.removeEventListener('mouseenter', scaleImg);

parag.addEventListener('click', appearImg);
img.addEventListener('mouseenter', scaleImg);
img.addEventListener('click', disappearImg);