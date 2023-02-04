(function () {
  addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const toggleNav = function () {
      nav.classList.toggle("active");
    };
    const removeActNav = function () {
      nav.classList.remove("active");
    };

    const items = document.querySelectorAll(".header__list-item");

    const close = document.querySelector(".header__close-btn");

    burgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleNav();
    });

    close.addEventListener("click", function () {
      removeActNav();
    });

    items.forEach(function (el) {
      el.addEventListener("click", function () {
        removeActNav();
      });
    });

    const loginBtn = document.querySelector(".header__btn");
    const account = document.querySelector(".account");
    const login = document.querySelector(".wrapper-modal-login");
    const modal = document.querySelector(".modal-window");
    const register = document.querySelector(".register");
    const modalLogin = document.querySelector(".modal-window-login");
    const modalSignup = document.querySelector(".modal-window-signup");
    const logBtn = document.querySelector(".login");
    const password = document.querySelector(".input-password");
    const passwordSignup = document.querySelector(".input-password-signup");
    const signInForm = document.querySelector(".signin");
    const signUpForm = document.querySelector(".signup");
    const email = document.querySelector(".input-email");
    const emailSignup = document.querySelector(".input-email-signup");
    const padLeft = document.querySelector(".destination-pagination-left");
    const padRight = document.querySelector(".destination-pagination-right");
    let slides = document.querySelectorAll(".destination__slide");
    const dots = document.querySelectorAll(".destination__dot");
    const sliderWrapper = document.querySelector(
      ".destination__slider-wrapper"
    );
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    const activeDot = (n) => {
      for (let dot of dots) {
        dot.classList.remove("active");
      }
      dots[n].classList.add("active");
    };

    padRight.addEventListener("click", nextFunc);
    padLeft.addEventListener("click", prevFunc);

    let slidesArr = Array.from(slides);

    const prevSlider = (arr) => {
      let lastSlide = arr.pop();
      arr.unshift(lastSlide);
    };
    const nextSlider = (arr) => {
      let firstSlide = arr.shift();
      arr.push(firstSlide);
    };
    if (innerWidth < 691) {
      prevFunc();
    }
    prev.addEventListener("click", prevFunc);
    function prevFunc() {
      let percent = 0;
      function each() {
        let slideWidth = innerWidth > 690 ? 108 : 100;
        if (percent == slideWidth) {
          for (let i = 0; i < slidesArr.length; i++) {
            sliderWrapper.append(slidesArr[i]);
            slidesArr[i].style.transform = `translateX(0%)`;
          }
          clearInterval(prevAnim);
        } else {
          percent++;
          for (let i = 0; i < slidesArr.length; i++) {
            slidesArr[i].classList.remove("active");
            slidesArr[i].style.transform = `translateX(${percent}%)`;
          }
        }
      }
      let prevAnim = setInterval(each, 1);
      prevSlider(slidesArr);
      dotsFuncNext();
    }
    next.addEventListener("click", nextFunc);
    function nextFunc() {
      let percent = 0;
      function each() {
        let slideWidth = innerWidth > 690 ? 108 : 100;
        if (percent == -slideWidth) {
          for (let i = 0; i < slidesArr.length; i++) {
            sliderWrapper.append(slidesArr[i]);
            slidesArr[i].style.transform = `translateX(0%)`;
          }
          clearInterval(nextAnim);
        } else {
          percent--;
          for (let i = 0; i < slidesArr.length; i++) {
            slidesArr[i].classList.remove("active");
            slidesArr[i].style.transform = `translateX(${percent}%)`;
          }
          slidesArr[4].classList.add("active");
        }
      }
      let nextAnim = setInterval(each, 1);
      nextSlider(slidesArr);
      dotsFuncNext();
    }
    function dotsFuncNext() {
      if (slidesArr[4].classList.contains("usa")) {
        activeDot(2);
      } else if (slidesArr[4].classList.contains("spain")) {
        activeDot(0);
      } else {
        activeDot(1);
      }
    }

    register.addEventListener("click", function () {
      modalLogin.style.display = "none";
      modalSignup.style.display = "block";
    });

    logBtn.addEventListener("click", function () {
      modalLogin.style.display = "block";
      modalSignup.style.display = "none";
    });

    loginBtn.addEventListener("click", function () {
      login.classList.add("active");
    });

    account.addEventListener("click", function () {
      login.classList.add("active");
    });

    signInForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      if (email.value && password.value) {
        alert(`Ваша почта ${email.value}, ваш пароль ${password.value}`);
        email.value = "";
        password.value = "";
      }
    });
    signUpForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      if (emailSignup.value && passwordSignup.value) {
        alert(
          `Ваша почта ${emailSignup.value}, ваш пароль ${passwordSignup.value}`
        );
        emailSignup.value = "";
        passwordSignup.value = "";
      }
    });

    document.addEventListener("click", function (e) {
      const target = e.target;
      const targetNav = target == nav || nav.contains(target);
      const targetBtn = target == burgerBtn;
      const activeNav = nav.classList.contains("active");

      const targetPopup = target == modal || modal.contains(target);
      const accountBtn = target == account;
      const logBtn = target == loginBtn;
      const activePopup = login.classList.contains("active");
      if (!targetNav && !targetBtn && activeNav) {
        toggleNav();
        modalLogin.style.display = "block";
        modalSignup.style.display = "none";
      }
      if (!targetPopup && activePopup && !(accountBtn || logBtn)) {
        login.classList.toggle("active");
        modalLogin.style.display = "block";
        modalSignup.style.display = "none";
      }
    });
  });
})();
