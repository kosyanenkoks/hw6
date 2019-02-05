/* Создайте коллекцию html-элементов

Итерируйте эту коллекцию, добавляя с помощью метода addEventListener обработчика clickHandler события click каждому элементу

Создайте несколько различных обработчиков ( массив )

В цикле добавьте каждому элементу "собственного" обработчика события click */
// ---------------------------------------------------------------------------

var imagesCollection = document.getElementsByClassName('img-task-2');
var pictures = Array.from(imagesCollection);

var clickHandlers = [
    function scaleImg (event) {event.target = console.log(1)},
    function addBorder (event) {event.target = console.log(2)},
    function addMargin (event) {event.target = console.log(3)}
];

// var clickHandlers = [
//     function scaleImg (event) {this.console.log(1)},
//     function addBorder (event) {this.console.log(2)},
//     function addMargin (event) {this.console.log(3)}
// ];

function clickHandler(event) {
    clickHandlers.forEach(function(func, i, clickHandlers) {
        clickHandlers[i]();
    });
}

pictures.forEach(function(img, i, pictures) {
    pictures[i].addEventListener('click', clickHandler);
    // pictures[i].addEventListener ('click', function ( event ) {
    //     clickHandlers.forEach(function(func, j, clickHandlers) {
    //         if (pictures[i] == clickHandlers[j]) {
    //             clickHandlers[j]();
    //         }
    //     });
    // })

    // pictures[i].addEventListener ( 'click', function ( event ) {
    //     console.log ( 'work!' )
    // })
});
