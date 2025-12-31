const headerHover = () => {
  const gnbItems = document.querySelectorAll(".gnb__item");
  const headerBg = document.querySelector(".header__bg");
  const submenus = document.querySelectorAll(".submenu");
  const headerEl = document.querySelector(".header");
  const alinks = document.querySelectorAll(".submenu a");

  //   set transition delay on a-tag
  submenus.forEach((el) => {
    el.querySelectorAll("a").forEach((a, index) => {
      a.classList.add("beforeAni");
      a.style.setProperty("--headerTextDelay", `${index * 10 + 200}ms`);
    });
  });

  gnbItems.forEach((gnbItem, index) => {
    gnbItem.addEventListener("pointerenter", () => {
      handlerEnter(index);
    });
  });

  headerEl.addEventListener("pointerleave", () => {
    handlerLeave();
  });

  let textTimer;
  const handlerEnter = (index) => {
    headerEl.classList.add("active");
    headerBg.classList.add("active");
    submenus.forEach((el) => {
      el.classList.remove("active");
      el.classList.add("flyout");
    });
    submenus[index].classList.add("active");

    // removing beforeAni to prevent ani being play again
    // timeout to wait while the animation plays
    alinks.forEach((a) => {
      a.classList.remove("beforeAni");
      textTimer = setTimeout(() => {
        clearTimeout(textTimer);
        a.classList.add("afterAni");
      }, 300);
    });
  };

  const handlerLeave = () => {
    submenus.forEach((el) => {
      el.classList.remove("flyout");
      el.classList.remove("active");
    });
    headerEl.classList.remove("active");
    headerBg.classList.remove("active");
    alinks.forEach((a) => {
      a.classList.add("beforeAni");
      a.classList.remove("afterAni");
    });
  };
};

const swiper__init = () => {
  const collectionSwiper = new Swiper(".collection__swiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".section-collection .swiper-btns__next",
      prevEl: ".section-collection .swiper-btns__prev",
    },
  });

  const bestSwiper = new Swiper(".best__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".section-best .swiper-btns__next",
      prevEl: ".section-best .swiper-btns__prev",
    },
  });

  const newsSwiper = new Swiper(".news__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: ".section-news .swiper-btns__next",
      prevEl: ".section-news .swiper-btns__prev",
    },
  });
};

headerHover();
swiper__init();
