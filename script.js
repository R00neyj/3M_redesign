const gnbItem = document.querySelectorAll(".gnb__item");
const headerBg = document.querySelector(".header__bg");
const submenuEl = document.querySelectorAll(".submenu");

gnbItem.forEach((el, index) => {
  const flyoutEl = el.querySelectorAll(".submenu a");

  flyoutEl.forEach((el2, index) => {
    el2.classList.add("beforeAni");
    el2.style.transition = `opacity .3s ${index * 10}ms, transform .3s ${index * 10}ms`;
  });

  el.addEventListener("pointerenter", () => {
    whenPointerEnter(index, flyoutEl);
  });
});

submenuEl.forEach((el) => {
  el.addEventListener("pointerleave", () => {
    el.classList.remove("active");
    headerBg.classList.remove("active");
    el.querySelectorAll("a").forEach((el2) => {
      el2.classList.add("beforeAni");
    });
  });
});

const whenPointerEnter = (index, flyout) => {
  submenuEl.forEach((el) => {
    el.classList.remove("active");
  });
  submenuEl[index].classList.add("active");
  headerBg.classList.add("active");
  flyout.forEach((el2) => {
    el2.classList.remove("beforeAni");
  });
};
