const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', movePrev);
nextBtn.addEventListener('click', moveNext);

const ImageSlide = document.querySelector('.carousel_slide');
const Images = document.querySelectorAll('.carousel_slide img');
let currentImage = 0;
let size = Images[0].clientWidth;
console.log(size);
function movePrev() {
  console.log(currentImage);
  if (currentImage !== 0) {
    currentImage--;
    ImageSlide.style.transform = `translateX(${-size * currentImage}px)`;
  }
}

function moveNext() {
  console.log(currentImage);
  if (currentImage !== Images.length - 2) {
    currentImage++;
    ImageSlide.style.transform = `translateX(${-size * currentImage}px)`;
  }
}
