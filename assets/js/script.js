var slideIndex = 1;
//the first slide is the default slide
showDivs(slideIndex);

function goLeftOrRight(n) {
    //slidesIndex = slidesIndex + n
  showDivs(slideIndex += n);

}

function showDivs(n) {
  var i;
  //
  var slides = document.getElementsByClassName("mySlides");
    //n large than the img length, then go back to the first img elemnt 
  if (n > slides.length) {
      slideIndex = 1
    }
    //n less than 1, then go to the last img elemnt   
  if (n < 1) {
      slideIndex = slides.length
    }
    //set slides to display none, otherwise all slides will appear on the page
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  //display one slide per time, the array index start with zero
  slides[slideIndex-1].style.display = "block";  
}