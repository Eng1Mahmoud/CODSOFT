// function scal
function scal(e) {
  e.style.cssText = " transform: scale(1, 1);";
}
window.onload = function () {
  // start loud

  let loud = document.querySelector(".loud");
  setTimeout(() => {
    loud.style.display = "none";
    document.body.style.cssText = "overflow:visible";

    // start hero
    let header_content = document.querySelectorAll(".st .cont div");
    header_content.forEach(scal);
  }, 2000);
};

//var notStart with number section
let notStart = true;

window.onscroll = function () {
  // start header

  let header = document.querySelector("header");
  if (window.scrollY >= 150) {
    header.style.backgroundColor = "rgba(24, 6, 185, 0.8)";
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }

  // start number

  let element = document.querySelectorAll(".number .contener .content .ch");
  let element_perant = document.querySelector(".number .contener .content");

  if (window.scrollY >= element_perant.offsetTop - 400) {
    if (notStart) {
      element.forEach((e) => {
        startCount(e);
      });

      notStart = false;
    }
    function startCount(e) {
      let gole = e.children[0].dataset.num;
      let count = setInterval(() => {
        e.children[0].textContent++;
        if (e.children[0].textContent == gole) {
          clearInterval(count);
        }
      }, 300 / gole);
    }
  }

  // start about

  let text_about = document.querySelector(".about .contener .content");

  if (window.scrollY >= text_about.children[0].offsetTop - 400) {
    text_about.children[0].style.cssText = "position: relative;left:0%;";
  }

  if (window.scrollY >= text_about.children[1].offsetTop - 400) {
    text_about.children[1].children[0].style.cssText =
      " transform: scale(1, 1);";
  }

  // start service

  let service_item = document.querySelectorAll(
    ".services .contener .content .item"
  );

  service_item.forEach(function (e) {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = " transform: scale(1, 1);";
    }
  });

  // start FEATURES

  let text_features = document.querySelectorAll(
    ".FEATURES .contener .content .items"
  );
  let img_features = document.querySelector(
    ".FEATURES .contener .content .img img"
  );

  text_features.forEach(function (e) {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = " bottom:0px; visibility: visible;";
    }
  });

  if (window.scrollY >= img_features.offsetTop - 400) {
    img_features.style.cssText = " transform: scale(1, 1);";
  }

  // start pricing

  let pricing_item = document.querySelectorAll(
    ".PRICING .contener .content .item"
  );

  pricing_item.forEach(function (e) {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = " transform: scale(1, 1);";
    }
  });

  // start faq

  let faq_item = document.querySelectorAll(".faq .qustion .ask");

  faq_item.forEach(function (e) {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = " bottom: 0px; visibility: visible;";
    }
  });

  // start contact

  //start item
  let contact_item = document.querySelectorAll(
    ".contact .contener .content div"
  );

  contact_item.forEach((e) => {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = "transform: scale(1, 1);";
    }
  });

  // start ifram and form

  let form_ifram = document.querySelectorAll(
    ".contact .contener .content2>div"
  );

  form_ifram.forEach(function (e) {
    if (window.scrollY >= e.offsetTop - 400) {
      e.style.cssText = " bottom: 0px; visibility: visible;";
    }
  });
  // start scroll-top

  let scroll_top = document.querySelector(".scroll-top");

  if (window.scrollY >= 200) {
    scroll_top.style.display = "flex";
  } else {
    scroll_top.style.display = "none";
  }

  scroll_top.onclick = function () {
    window.scrollTo(0, 0);
  };
};

// start menu

let droupdoun_uls = document.querySelector(".menu .link_menu>ul>.dr");
console.log(droupdoun_uls);
droupdoun_uls.onclick = function () {
  this.children[1].classList.toggle("block");
};

let menu = document.querySelector(".menu");
let menu_li = document.querySelectorAll(".menu ul>li>a");
let menu_close = document.querySelector(".menu i");
let menu_bar = document.querySelector("header .contener>i");

// click menu
menu_bar.onclick = function () {
  menu.style.cssText = "transform: scale(1,1);";
  this.style.display = "none";
};

// close menu
menu_close.onclick = function () {
  menu.style.cssText = "transform: scale(0,0);";
  menu_bar.style.display = "block";
};

// close menu if click any linke
menu_li.forEach(function (e) {
  e.onclick = function () {
    if (this.hasAttribute("href")) {
      menu.style.cssText = "transform: scale(0,0);";
      menu_bar.style.display = "block";
    }
  };
});

//end  start menu

// start togle dropdoun
let drop = document.querySelector("header .contener .nav ul .drop");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("d")) {
    drop.children[1].classList.toggle("togle");
  } else {
    drop.children[1].classList.remove("togle");
  }
});

// start portfolio

let itemImg = document.querySelectorAll(".portfolio .content>.imgs");
itemImg.forEach(function (e) {
  e.children[0].onmouseover = function () {
    this.style.cssText = " transform: scale(1.1,1.1);";
    e.children[1].style.visibility = "visible";
  };

  e.children[1].onmouseleave = function () {
    e.children[0].style.cssText = " transform: scale(1,1);";
    this.style.visibility = "hidden";
  };
});

let ul = document.querySelectorAll(".portfolio .contener .bt ul li");

ul.forEach(function (e) {
  e.onclick = function () {
    ul.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.toggle("active");

    let item = document.querySelectorAll(".portfolio .contener .content .imgs");
    let data = e.dataset.type;
    console.log(data);
    item.forEach(function (it) {
      if (!it.classList.contains(data)) {
        it.children[0].style.cssText = "transform: scale(0,0)";
        setTimeout(() => {
          it.style.cssText = "display:none";
        }, 300);
      } else {
        it.style.cssText = "display:block";
        setTimeout(() => {
          it.children[0].style.cssText = "transform:scale(1,1)";
        }, 100);
      }
    });
  };
});

// start faq

let ask = document.querySelectorAll(".faq .qustion .ask");

ask.forEach(function (e) {
  e.children[0].onclick = function () {
    heights = this.nextElementSibling.scrollHeight;

    if (this.nextElementSibling.style.maxHeight == 0) {
      ask.forEach(function (e) {
        e.children[1].style.maxHeight = null;
        e.children[1].style.overflow = "hidden";
        e.children[0].children[1].style.transform = "rotateX(-180deg)";
      });

      this.nextElementSibling.style.maxHeight = heights + "px";
      this.nextElementSibling.style.overflow = "visible";
      this.children[1].style.transform = "rotateX(0deg)";
    } else {
      this.nextElementSibling.style.maxHeight = "0px";
      this.nextElementSibling.style.overflow = "hidden";
      this.children[1].style.transform = "rotateX(-180deg)";
    }
  };
});
