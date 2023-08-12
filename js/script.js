function togglePopup(num){
  popups[num].classList.toggle("active"); 
}

let popups = document.getElementsByClassName("popup");
let closeBtns = document.getElementsByClassName("close-btn");
let openBtns = document.getElementsByClassName("btn");

for(let i = 0; i<closeBtns.length; i++){
  closeBtns[i].addEventListener("click", function(){togglePopup(i)});
  openBtns[i].addEventListener("click", function(){togglePopup(i)});
}
$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
