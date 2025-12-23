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

headerHover();

// trash
// const gnbItem = document.querySelectorAll(".gnb__item");
//   const headerBg = document.querySelector(".header__bg");
//   const submenuEl = document.querySelectorAll(".submenu");
//   const headerEl = document.querySelector(".header");

//   gnbItem.forEach((el, index) => {
//     const flyoutEl = el.querySelectorAll(".submenu a");

//     el.addEventListener("pointerenter", () => {
//       whenPointerEnter(index, flyoutEl);
//     });
//     // el.addEventListener("pointerleave", () => {
//     //   let submenu = el.querySelector(".submenu");
//     //   whenPointerLeave(submenu);
//     // });
//   });

//   submenuEl.forEach((el) => {
//     el.addEventListener("pointerleave", () => {
//       whenPointerLeave(el);
//     });
//   });

//   const whenPointerEnter = (index, flyout) => {
//     headerEl.classList.add("active");
//     submenuEl.forEach((el) => {
//       el.classList.remove("active");
//       el.classList.add("flyout");
//     });
//     submenuEl[index].classList.add("active");
//     headerBg.classList.add("active");
//     flyout.forEach((el2) => {
//       el2.classList.remove("beforeAni");
//     });
//     let resetTimer;
//     resetTimer = setTimeout(() => {
//       clearTimeout(resetTimer);
//       resetTransition();
//     }, 300);
//   };

//   const whenPointerLeave = (el) => {
//     headerEl.classList.remove("active");
//     el.classList.remove("active");
//     headerBg.classList.remove("active");
//     el.querySelectorAll("a").forEach((el) => el.classList.add("beforeAni"));
//     submenuEl.forEach((el) => el.classList.remove("flyout"));
//     let setTimer;
//     setTimer = setTimeout(() => {
//       clearTimeout(setTimer);
//       setTransition();
//     }, 300);
//   };

//   const setTransition = () => {
//     gnbItem.forEach((el) => {
//       const flyoutEl = el.querySelectorAll(".submenu a");
//       flyoutEl.forEach((el2, index) => {
//         el2.classList.add("beforeAni");
//         el2.style.transition = `opacity .3s ${index * 10 + 200}ms, transform .3s ${index * 10 + 200}ms`;
//       });
//     });
//   };

//   setTransition();
//   const resetTransition = () => {
//     gnbItem.forEach((el) => {
//       const flyoutEl = el.querySelectorAll(".submenu a");
//       flyoutEl.forEach((el2, index) => (el2.style.transition = `initial`));
//     });
//   };
