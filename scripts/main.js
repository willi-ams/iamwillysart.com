"use strict";

(() => {
  let indexNo = 0;
  // console.log(`this is the first logged indexNo ${indexNo}`);

  document.querySelector(".modal__close").addEventListener("click", clodeModal);

  function clodeModal() {
    modal.style.display = "none";
    indexNo = 0;

    // enables the scrolls
    document.body.classList.remove("stop-scrolling");
  }

  const modal = document.getElementById("img-modal");
  const modalImg = document.querySelector(".modal__image");

  const galleryImg = document.querySelectorAll(".gallery__img");
  const imgArr = Array.from(galleryImg);

  imgArr.forEach((cur, index, array) => {
    cur.addEventListener("click", () => {
      // display the modal and current image selected
      modal.style.display = "block";
      modalImg.src = cur.src;
      console.log(cur);

      // get the current selected img position in the array
      let position = imgArr.indexOf(cur);
      // console.log(position);

      // updates the indexNO to the current
      indexNo += position;
      // console.log(`this is the indexNo ${indexNo}`);

      // stops the scrolls
      document.body.classList.add("stop-scrolling");
    });
  });

  document.querySelector(".modal__next").addEventListener("click", () => {
    // when the index no is less than the last element (-1)
    if (indexNo < imgArr.length - 1) {
      modalImg.src = imgArr[(indexNo += 1)].src;
    }

    // console.log(indexNo);
  });

  document.querySelector(".modal__prev").addEventListener("click", () => {
    // if the indexNo greater than zero // if equal to zero, it wont work (i.e the first element)
    if (indexNo > 0) {
      modalImg.src = imgArr[(indexNo -= 1)].src;
    }

    // console.log(indexNo);
  });
})();

// (() => {

//   const body = document.body;
//   let lastScroll = 0;

//   window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset; //the current scroll number
//     console.log(window.pageYOffset);

//     // if d currentScroll is at the top
//     // if (currentScroll <= 0) {
//     //   body.classList.remove("scroll-down");
//     //   body.classList.add("scroll-up");
//     // }

//     // not contain scroll-down     // removes d nav display
//     if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
//       body.classList.remove("scroll-up");
//       body.classList.add("scroll-down");
//     }

//     // contains scroll-down        // adds the nav display
//     if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
//       body.classList.remove("scroll-down");
//       body.classList.add("scroll-up");
//     }

//     lastScroll = currentScroll;
//     console.log(`this is d ${lastScroll}`);
//   });

// })();

document.querySelector(".hamburger").addEventListener("click", () => {
  // document.querySelector('.nav__background').style.display = 'block';
  document.body.classList.add("stop-scrolling");

  document.querySelector(".nav__background").classList.remove("cut-display");
  document.querySelector(".nav__background").classList.add("add-display");

  document.querySelector(".menu").classList.add("enable-display");
  document.querySelector(".menu").classList.add("cancel-display");
});

document.querySelector(".nav__background").addEventListener("click", () => {
  // document.querySelector('.nav__background').style.display = 'none';
  document.body.classList.remove("stop-scrolling");

  document.querySelector(".nav__background").classList.remove("add-display");
  document.querySelector(".nav__background").classList.add("cut-display");

  document.querySelector(".menu").classList.remove("enable-display");
  document.querySelector(".menu").classList.add("cancel-display");
});



document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);

