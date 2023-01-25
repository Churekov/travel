const sliderLine = document.querySelector('.slider_line');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let position = 0,
    dotIndex = 0;

const nextSlide = () => {
    if (position < (dots.length - 1) * 800) {
    position += 800;
    dotIndex++
    } else { 
        position = 0;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

const prevSlide = () => {
    if (position > 0) {
        position -= 800;
        dotIndex--
        } else {
            position = (dots.length - 1) * 800;
            dotIndex = (dots.length - 1);
        }
        sliderLine.style.left = -position + 'px';
        thisSlide(dotIndex);
    }



dots.forEach((dot, index) => {
    dot.addEventListener('click',() => {
        position = 800 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    })
})


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    } dots[index].classList.add('active');
}



// SETINTERVAL

setInterval( () => {
    nextSlide()
}, 3000 );