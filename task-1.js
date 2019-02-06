var taskOneHolder = document.createElement('div');
taskOneHolder.className = 'task-1';
var nextEl = document.getElementById("images-holder");
var parentOfNextEl = nextEl.parentNode;
parentOfNextEl.insertBefore(taskOneHolder, nextEl);

var parag = document.createElement('p');
parag.innerText = 'Click on me';
taskOneHolder.appendChild(parag);


var img = document.createElement('img');
img.src = 'https://desenio.co.uk/bilder/artiklar/zoom/pre0019_1.jpg';
img.style.width = '100px';
img.style.transition = 'width 0.5s';

function appearImg (event) {
    taskOneHolder.appendChild(img);
}

function disappearImg(event) {
    taskOneHolder.removeChild(img);
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