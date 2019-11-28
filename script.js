var slide_index = openImage();

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function prevSlide(n) {
    displaySlides(slide_index -= n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slide_index = 1
    }
    if (n < 1) {
        slide_index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("open-image");
    }
    slides[slide_index - 1].classList.add("open-image");
}


var slide_index = openImage();

function openImage(id){
    var slide = document.getElementById(id);
    var slides = document.getElementsByClassName("slide");
    var gallery = document.getElementById('gallery');

    if(gallery.classList.contains("active")){
        gallery.classList.remove("active");
    } else {
        gallery.classList.add("active");
    }

    if(slide.classList.contains("open-image")){
        slide.classList.remove("open-image")
    } else {
        slide.classList.add("open-image")
    }

    for(var i = 0; i < slides.length; i++){

        if(slides[i].classList.contains("open-image")){
            slide_index = i + 1;
        }
    }
}