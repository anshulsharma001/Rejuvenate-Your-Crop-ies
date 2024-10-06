AOS.init();

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("show");
}



// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
});

var swiper2 = new Swiper("#swiperTestimonial", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: "#swiperPagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiperNext",
    prevEl: "#swiperPrev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, 
    },
  },
});

const video = document.getElementById('customVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });