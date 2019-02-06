var imagesCollection = document.getElementsByClassName('img-task-2');
var pictures = Array.from(imagesCollection);

var clickHandlers = [
    function makeSmallerImg (event) {this.style.width = "100px"},
    function addBorder (event) {this.style.border = "1px solid red"},
    function rotateMargin (event) {this.style.margin = "15px"}
];

function clickHandler(event) {
    clickHandlers.forEach(function(func, i, clickHandlers) {
        clickHandlers[i]();
    });
}

pictures.forEach(function(img, i, pictures) {
    pictures[i].removeEventListener('click', clickHandlers[i]);
    pictures[i].addEventListener('click', clickHandlers[i]);
});
