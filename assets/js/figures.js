
var N = 8;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function get_photos (n) { // -> Array
    var figures = [];
    for(let i=0; i<n; i++){
        let num = i.toString().padStart(2, "0");
        figures.push(`https://cyberespaco.github.io/assets/images/vaporwave/img${num}.png`);
        console.log(figures[i]);
    }
    return figures;
}

function set_figures(n) {
    var photos = document.getElementsByClassName("photo-image");
    var figures = get_photos(n);
    // Shuffles them for some randomness
    figures = shuffle(figures);
    
    for(var i=0; i<photos.length; i++) {
        if (photos[i].src === "") {
            photos[i].src = figures[i % figures.length];
        }
    }

    var courses = document.getElementsByClassName("course-image");
    var course_figure = 'https://cyberespaco.github.io/assets/images/embreve.png';

    for(var i=0; i<courses.length; i++) {
        if (courses[i].src === "") {
            courses[i].src = course_figure;
        }
    }
}

set_figures(N);