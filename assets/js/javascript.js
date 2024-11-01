// Aside
// const nav = document.querySelector(".nav"),
//   navList = nav.querySelectorAll("li"),
//   totalNavList = navList.length,
//   allSection = document.querySelectorAll(".section"),
//   totalSection = allSection.length;
// for (let i = 0; i < totalNavList; i++) {
//   const a = navList[i].querySelector("a");
//   a.addEventListener("click", function () {
//     // removeBackSection();
//     for (let j = 0; j < totalNavList; j++) {
//       if (navList[j].querySelector("a").classList.contains("active")) {
//         // addBackSection(j);
//         // allSection[j].classList.add("back-section");
//       }
//       navList[j].querySelector("a").classList.remove("active");
//     }
//     this.classList.add("active");
//     // showSection(this);
//     if (window.innerWidth < 1200) {
//       // asideSectionTogglerBtn();
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", function () {
  const allSection = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("li a");
  function changeActiveLink() {
    let scrollPos = window.scrollY + window.innerHeight / allSection.length;
    allSection.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        let currentId = section.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
});

// function addBackSection(num) {
//   allSection[num].classList.add("back-section");
// }
// function removeBackSection() {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("back-section");
//   }
// }
// function showSection(element) {
//   for (let i = 0; i < totalSection; i++) {
//     allSection[i].classList.remove("active");
//   }
//   const target = element.getAttribute("href").split("#")[1];
//   document.querySelector("#" + target).classList.add("active");
//   document.querySelector("." + target).addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {
//       document.querySelector(".style-switcher").classList.remove("open");
//     }
//   });
// }
// function updateNav(element) {
//   for (let i = 0; i < totalNavList; i++) {
//     navList[i].querySelector("a").classList.remove("active");
//     const target = element.getAttribute("href").split("#")[1];
//     if (
//       target ===
//       navList[i].querySelector("a").getAttribute("href").split("#")[1]
//     ) {
//       navList[i].querySelector("a").classList.add("active");
//     }
//   }
// }

// document.querySelector(".hire-me").addEventListener("click", function () {
//   const sectionIndex = this.getAttribute("data-section-index");
//   showSection(this);
//   updateNav(this);
//   removeBackSection();
//   addBackSection(sectionIndex);
// });

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
// Modal click
// const modalBtn = document.querySelector(".modal-btn"),
//   modalClose = document.querySelector(".close"),
//   target = modalBtn.getAttribute("target");

// modalBtn.addEventListener("click", () => {
//   // open modal sesuai target
//   document.querySelector(target).classList.add("open");
// });
// // make modal close
// modalClose.addEventListener("click", () => {
//   document.querySelector(target).classList.remove("open");
// });

// // Contact Form
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbwd49aoY4Lh5EnmRybFRvn5mbfi5pV-DyrppyVtNbs_6LkBNlAl0rNcmrfGHv2F9eea/exec";
// const form = document.forms["submit-to-google-sheet"];
// const btn = document.querySelector(".btn-kirim");
// const loading = document.querySelector(".btn-loading");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // ketika tombol kirim di klik
//   // tampilkan tombol loading hilangkan tombol kirim
//   loading.classList.toggle("hidden");
//   btn.classList.toggle("hidden");
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       // ketika tombol kirim di klik
//       // tampilkan tombol kirim hilangkan tombol loading
//       loading.classList.toggle("hidden");
//       btn.classList.toggle("hidden");

//       const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//       });

//       Toast.fire({
//         icon: "success",
//         title: "Pesan sudah terkirim!",
//       });

//       // console.log('Success!', response)
//       // reset form
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
