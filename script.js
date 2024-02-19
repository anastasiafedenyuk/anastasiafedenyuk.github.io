let questions = document.querySelectorAll("#question");
let buttonsPlus = document.querySelectorAll("#button-plus");
let buttonsMinus = document.querySelectorAll("#button-minus");
let answers = document.querySelectorAll("#answer");
let fulls = document.querySelectorAll("#full");

for (let i = 0; i < buttonsPlus.length; i++) {
    buttonsPlus[i].addEventListener("click", function(){
        buttonsPlus[i].style.display = "none";
        answers[i].style.display = "block";
        buttonsMinus[i].style.display = "block";
        fulls[i].style.height = "213px";
        answers[i].style.padding = "0px 84px 0px 33px";
    });

    buttonsMinus[i].addEventListener("click", function(){
        buttonsPlus[i].style.display = "block";
        answers[i].style.display = "none";
        buttonsMinus[i].style.display = "none";
        fulls[i].style.height = "74px";
    });
}



$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3, // Количество отображаемых слайдов
      slidesToScroll: 1, // Количество прокручиваемых слайдов
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768, // При ширине экрана меньше 768px
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480, // При ширине экрана меньше 480px
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
  