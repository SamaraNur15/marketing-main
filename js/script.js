// Slideshow
let slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
  showDivs((slideIndex += n))
}

function currentDiv(n) {
  showDivs((slideIndex = n))
}

function showDivs(n) {
  let i
  let x = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('demodots')
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' ucse-white', '')
  }
  x[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' ucse-white'
}
