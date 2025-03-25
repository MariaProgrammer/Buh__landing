$(document).ready(function() {
  $(".swiper-slide__link1").fancybox();
  $(".swiper-slide__link2").fancybox();
  $(".swiper-slide__link3").fancybox();
  $(".swiper-slide__link4").fancybox();
  $(".swiper-slide__link5").fancybox();
  $(".swiper-slide__link6").fancybox();
  $(".swiper-slide__link7").fancybox();
  $(".swiper-slide__link8").fancybox();
  $(".swiper-slide__link9").fancybox();
  $(".swiper-slide__link10").fancybox();
  $(".swiper-slide__link11").fancybox();
  $(".swiper-slide__link12").fancybox();
});

// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}



// Burger
// const burger = document.getElementById("burger");
// const nav = document.getElementById("nav");
// const links = Array.from(document.querySelectorAll("burger__menu-link"));

// burger.addEventListener("click", () => {
//   nav.classList.toggle("active");
//   burger.classList.toggle("burger--active");
//   // document.body.classList.toggle("stop-scroll");
// });

//cookies

// const cookiesBtn = document.querySelector(".cookie__button");
// const cookies = document.querySelector(".cookie");
// function getCookies() {
//   setTimeout(() => {
//     cookies.classList.add("active");
//   }, 2000);
// }
// cookiesBtn.addEventListener("click", function () {
//   cookies.classList.remove("active");
// });

//Появление блоков по скроллу
// const hero = document.querySelector(".hero");
// const steps = document.querySelector(".steps");
// const recent = document.querySelector(".recent");
// const scrollCards = Array.from(document.querySelectorAll(".recent__card"));
// const scrollCards1 = [scrollCards[0], scrollCards[1], scrollCards[2]];
// const scrollCards2 = [scrollCards[3], scrollCards[4], scrollCards[5]];
// const scrollCards3 = [scrollCards[6], scrollCards[7], scrollCards[8]];

// const technique = document.querySelector(".technique");
// const contacts = document.querySelector(".contacts");

// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     hero.classList.add("active");
//     steps.classList.add("active");
//     getCookies();
//   }, 100);
// });

// document.addEventListener("scroll", function () {
//   let scrollTop = window.scrollY;

//   let heroHeight = hero.offsetHeight;
//   let stepsHeight = heroHeight + steps.offsetHeight;
//   let recentCards = stepsHeight + recent.offsetHeight;
//   let recentCards2 = stepsHeight + recent.offsetHeight / 3;
//   let recentCards5 = stepsHeight + recent.offsetHeight / 5;
//   let techniqueHeight = recentCards + technique.offsetHeight / 3;

  // if (scrollTop >= heroHeight / 3) {
  //   steps.classList.add('active');
  // } else {
  //   steps.classList.remove('active');
  // }

//   if (scrollTop >= stepsHeight) {
//     scrollCards1.forEach((card) => {
//       card.classList.add("animation-class");
//     });
//   } else {
//     scrollCards1.forEach((card) => {
//       card.classList.remove("animation-class");
//     });
//   }

//   if (scrollTop >= recentCards5) {
//     scrollCards2.forEach((card) => {
//       card.classList.add("animation-class");
//     });
//   } else {
//     scrollCards2.forEach((card) => {
//       card.classList.remove("animation-class");
//     });
//   }
//   if (scrollTop >= recentCards5 + recentCards5 / 5) {
//     scrollCards3.forEach((card) => {
//       card.classList.add("animation-class");
//     });
//   } else {
//     scrollCards3.forEach((card) => {
//       card.classList.remove("animation-class");
//     });
//   }
//   if (scrollTop >= recentCards2) {
//     technique.classList.add("active");
//   } else {
//     technique.classList.remove("active");
//   }
//   if (scrollTop >= techniqueHeight) {
//     contacts.classList.add("active");
//   } else {
//     contacts.classList.remove("active");
//   }
// });

// let heroHeight = hero.offsetHeight;
// let stepsHeight = hero.offsetHeight + steps.offsetHeight;

// const scrollAnimation = () => {
//   let windowCenter = window.innerHeight / 2 + window.scrollY;
// };

// scrollAnimation();
// window.addEventListener("scroll", () => {
//   scrollAnimation();
// });

// Маска для тел

let selector = document.getElementById("tel");
let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

// Валидация и отправка

let validation = new JustValidate("form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Это обязательное поле для заполнения!",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум 2 символа!",
    },
  ])
  .addField("#tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length > 0);
      },
      errorMessage: "Введите телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: "Введите телефон полностью",
    },
  ])
  .onSuccess(async function () {
    let data = {
      name: document.getElementById("name").value,
      tel: selector.inputmask.unmaskedvalue(),
      msg: document.getElementById("msg").value,
    };

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    let result = await response.text();

    // alert(result)
  });

//Плавное исчезновение placeholder

// const nameField = document.getElementById("name");
// const nameFieldCover = document.getElementById("placeholder1");

// nameFieldCover.addEventListener("click", function () {
//   nameFieldCover.style.opacity = "0";
//   nameFieldCover.style.zIndex = "-1";
//   nameField.focus();
// });
// nameField.addEventListener("focusout", function (e) {
//   if (nameField.value == "") {
//     nameFieldCover.style.opacity = "1";
//     nameFieldCover.style.zIndex = "10";
//     nameField.blur();
//   }
// });




//подключение слайдера-1
const swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,	
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,        
  // },
	// breakpoints: {
  //   // when window width is >= 320px
	// 	300: {
  //     slidesPerView: 1,
  //     spaceBetween: 12
  //   },
   
  //   when window width is >= 480px
  //   767: {
  //     slidesPerView: 2,
  //     spaceBetween: 12
  //   },
  //   // when window width is >= 640px
  //   958: {
  //     slidesPerView: 2,
  //     spaceBetween: 12
  //   },
	// 	1279: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  // },
	pagination:	{
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewhell: true,
	keyboard: true,
	});


const slides = document.querySelectorAll('.swiper-slide')
const buttonPrev1 = document.querySelector('.swiper-button-prev1')
const buttonPrev2 = document.querySelector('.swiper-button-prev2')
const buttonNext1 = document.querySelector('.swiper-button-next1')
const buttonNext2 = document.querySelector('.swiper-button-next2')

if (slides[0].classList.contains('swiper-slide-active') && (!slides[0].classList.contains('swiper-button-disabled'))) {
  buttonPrev1.classList.add('swiper-button-disabled');
} else {
  buttonPrev1.classList.remove('swiper-button-disabled');
}
if (slides[2].classList.contains('swiper-slide-active') ) {
  buttonNext1.classList.add('swiper-button-disabled');
} else {
  buttonNext1.classList.remove('swiper-button-disabled');
}
if (slides[4].classList.contains('swiper-slide-active') ) {
  buttonNext2.classList.add('swiper-button-disabled');
} else {
  buttonNext2.classList.remove('swiper-button-disabled');
}

buttonNext1.addEventListener('click', function() {
  if (slides[0].classList.contains('swiper-slide-active') ) {
    buttonPrev1.classList.add('swiper-button-disabled');
  } else {
    buttonPrev1.classList.remove('swiper-button-disabled');
  }
})

//подключение слайдера-2

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 4,
	spaceBetween: 0,	
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,        
  // },
	breakpoints: {
     // when window width is >= 320px
		300: {
      slidesPerView: 1,
      spaceBetween: 12
    },
		576: {
      slidesPerView: 2,
      spaceBetween: 12
    },
   
    //when window width is >= 480px
    767: {
      slidesPerView: 4,
      spaceBetween: 12
    }
  //   // when window width is >= 640px
  //   958: {
  //     slidesPerView: 2,
  //     spaceBetween: 12
  //   },
	// 	1279: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  },
	// pagination:	{
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	mousewhell: true,
	keyboard: true,
	});

//hover эффект для слайдов в слайдере-2

const slide1 = document.querySelector('.slide-1')
const slide2 = document.querySelector('.slide-2')
const slide3 = document.querySelector('.slide-3')
const slide4 = document.querySelector('.slide-4')
const slide5 = document.querySelector('.slide-5')

const cover1 = document.querySelector('.cover1')
const cover2 = document.querySelector('.cover2')
const cover3 = document.querySelector('.cover3')
const cover4 = document.querySelector('.cover4')
const cover5 = document.querySelector('.cover5')

slide1.addEventListener('mouseover', function() {
  cover1.classList.add('hover')
})
slide1.addEventListener('mouseout', function() {
  cover1.classList.remove('hover')
})
slide2.addEventListener('mouseover', function() {
  cover2.classList.add('hover')
})
slide2.addEventListener('mouseout', function() {
  cover2.classList.remove('hover')
})
slide3.addEventListener('mouseover', function() {
  cover3.classList.add('hover')
})
slide3.addEventListener('mouseout', function() {
  cover3.classList.remove('hover')
})
slide4.addEventListener('mouseover', function() {
  cover4.classList.add('hover')
})
slide4.addEventListener('mouseout', function() {
  cover4.classList.remove('hover')
})
slide5.addEventListener('mouseover', function() {
  cover5.classList.add('hover')
})
slide5.addEventListener('mouseout', function() {
  cover5.classList.remove('hover')
})

//появление кружочков по скроллу
const circle1 = document.querySelector('.circle-1')
const circle2 = document.querySelector('.circle-2')
const circle3 = document.querySelector('.circle-3')

const header = document.querySelector('.header')
const inner = document.querySelector('.inner')
const mainWrapH3 = document.querySelector('.main__wrap-h3')
const swiperOne = document.querySelector('.swiper1')
const aboutFeaturesTop = document.querySelector('.about__features-top')
const aboutFeaturesBottom = document.querySelector('.about__features-bottom')

document.addEventListener('scroll', function () {
  let scrollTop = window.scrollY;

  let headerHeight = header.offsetHeight;
  let innerHeight = headerHeight + inner.offsetHeight;
  let mainWrapH3Height = innerHeight + mainWrapH3.offsetHeight
  let swiperOneHeight = mainWrapH3Height + swiperOne.offsetHeight
  let aboutFeaturesTopHeight = swiperOneHeight + aboutFeaturesTop.offsetHeight
  let aboutFeaturesBottomHeight = aboutFeaturesTopHeight + (aboutFeaturesBottom.offsetHeight / 7)

  if (scrollTop >= aboutFeaturesBottomHeight) {
    
      circle1.classList.add('active')
      setTimeout(() => {
        circle2.classList.add('active')
        circle3.classList.add('active')
        
    
      }, 500)
   
  } else {
    circle1.classList.remove('active')
    circle2.classList.remove('active')
    circle3.classList.remove('active')
    
  }
})

//подключение слайдера-3
const swiper3 = new Swiper('.swiper3', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 3,
  slidesPerGroup: 2,
	spaceBetween: 140,
  // centeredSlides: true,
  // centerInsufficientSlides: true,	
  // createElements: true,
  // cssMode: true,
  allowTouchMove: true,
  grabCursor: true,  
	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,        
  },
	breakpoints: {
    // when window width is >= 320px
		300: {
      slidesPerView: 1,
      spaceBetween: 12
    },
		350: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesPerGroup: 1
    },
   
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 80
    },
    // when window width is >= 640px
    958: {
      slidesPerView: 3,
      spaceBetween: 100
    },
		1279: {
      slidesPerView: 3,
      spaceBetween: 140
    }
  },
	// pagination:	{
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	mousewhell: true,
	keyboard: true,
	});

//изменяем цвет и стиль нажатой кнопки Оставить заявку
  const btn1 = document.getElementById('btn1')
  const input = document.querySelector('.contacts__input')
  console.log(input);
  
  btn1.addEventListener('click', function() {
    btn1.textContent = 'Заявка оставлена'
    btn1.classList.remove('btn--dark')
    btn1.classList.remove('btn')
    btn1.classList.add('active')
    setTimeout(() => {
      location.reload()
    },5000)
    
  })
  

