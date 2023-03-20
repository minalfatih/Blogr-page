let link1 = document.querySelector(".link1");
let pro = document.querySelector(".pro");
let arrowDesktop1 = document.querySelector(".arrowDesktop1");
link1.addEventListener("click", function () {
  appear(pro, arrowDesktop1);
});

let link2 = document.querySelector(".link2");
let comp = document.querySelector(".comp");
let arrowDesktop2 = document.querySelector(".arrowDesktop2");
link2.addEventListener("click", function () {
  appear(comp, arrowDesktop2);
});

let link3 = document.querySelector(".link3");
let con = document.querySelector(".con");
let arrowDesktop3 = document.querySelector(".arrowDesktop3");
link3.addEventListener("click", function () {
  appear(con, arrowDesktop3);
});

function appear(menu, arrow) {
  menu.style.cssText = "display: flex; !importan";
  arrow.style.cssText =
    "transform: rotate(-180deg); transition: all 0.3s ease-in-out;";
}

document.addEventListener("click", function outside(e) {
  if (!link1.contains(e.target)) {
    disappear(pro, arrowDesktop1);
  }
  if (!link2.contains(e.target)) {
    disappear(comp, arrowDesktop2);
  }
  if (!link3.contains(e.target)) {
    disappear(con, arrowDesktop3);
  }
});

function disappear(menu, arrow) {
  menu.style.display = "none";
  arrow.style.cssText =
    "transform: rotate(0deg); transition: all 0.3s ease-in-out;";
}

let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let menuHamburger = document.querySelector(".menuHamburger");
hamburger.addEventListener("click", function () {
  menuHamburger.style.cssText = "display: flex;";
  hamburger.style.cssText = "display: none;";
  close.style.cssText = "display: flex;";
});

close.addEventListener("click", function () {
  menuHamburger.style.cssText = "display: none;";
  hamburger.style.cssText = "display: flex;";
  close.style.cssText = "display: none;";
});

let w = window.innerWidth;
console.log(w);

if (w <= 850) {
  let link1 = document.querySelector(".link1");
  let pro = document.querySelector(".pro");
  let length1 = document.querySelector(".length1");
  let arrowMobile1 = document.querySelector(".arrowMobile1");
  link1.addEventListener("click", function () {
    link1.style.cssText = "color: hsl(207, 13%, 34%); !important";
    pro.style.cssText =
      "display: flex; align-items: center; padding: 17px; background-color: hsl(240deg 2% 79% / 26%); position: absolute; top: 65px;";
    length1.style.cssText =
      "height: 190px; justify-content: center; align-items: baseline;";
    arrowMobile1.style.cssText =
      "transform: rotate(-180deg); transition: all 0.3s ease-in-out;";
  });

  let link2 = document.querySelector(".link2");
  let comp = document.querySelector(".comp");
  let length2 = document.querySelector(".length2");
  let arrowMobile2 = document.querySelector(".arrowMobile2");
  link2.addEventListener("click", function () {
    link2.style.cssText = "color: hsl(207, 13%, 34%) !important";
    comp.style.cssText =
      "display: flex; align-items: center; padding: 17px; background-color: hsl(240deg 2% 79% / 26%); position: absolute; top: 95px;";
    length2.style.cssText =
      "height: 160px; justify-content: center; align-items: baseline;";
    arrowMobile2.style.cssText =
      "transform: rotate(-180deg); transition: all 0.3s ease-in-out;";
  });

  let link3 = document.querySelector(".link3");
  let con = document.querySelector(".con");
  let length3 = document.querySelector(".length3");
  let arrowMobile3 = document.querySelector(".arrowMobile3");
  link3.addEventListener("click", function () {
    link3.style.cssText = "color: hsl(207, 13%, 34%); !important";
    con.style.cssText =
      "display: flex; align-items: center; padding: 17px; background-color: hsl(240deg 2% 79% / 26%); position: absolute; top: 125px;";
    length3.style.cssText =
      "height: 125px; justify-content: center; align-items: baseline;";
    arrowMobile3.style.cssText =
      "transform: rotate(-180deg); transition: all 0.3s ease-in-out;";
  });

  document.addEventListener("click", function outside(e) {
    if (!link1.contains(e.target)) {
      link1.style.cssText = "color: hsl(208, 49%, 24%) !important;";
      length1.style.cssText = "height: 0;";
      pro.style.cssText = "display :none;";
      arrowMobile1.style.cssText =
        "transform: rotate(0deg); transition: all 0.3s ease-in-out;";
    }
    if (!link2.contains(e.target)) {
      link2.style.cssText = "color: hsl(208, 49%, 24%) !important;";
      length2.style.cssText = "height: 0;";
      comp.style.cssText = "display :none;";
      arrowMobile2.style.cssText =
        "transform: rotate(0deg); transition: all 0.3s ease-in-out;";
    }
    if (!link3.contains(e.target)) {
      link3.style.cssText = "color: hsl(208, 49%, 24%) !important;";
      length3.style.cssText = "height: 0;";
      con.style.cssText = "display :none;";
      arrowMobile3.style.cssText =
        "transform: rotate(0deg); transition: all 0.3s ease-in-out;";
    }
  });

  //   function disappear(length, menu, arrow) {
  //     length.style.cssText = "height: 100%;";
  //     menu.style.cssText = "display :none;";
  //     arrow.style.cssText =
  //       "transform: rotate(0deg); transition: all 0.3s ease-in-out;";
  //   }
}

// document.addEventListener("click", function outside(e) {
//   if (!hamburger.contains(e.target)) {
//     ul.style.display = "none";
//   }
// });
