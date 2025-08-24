const year = document.getElementById("year");
year.innerHTML=new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-black/90');
    } else {
        nav.classList.remove('bg-black/90');
    }
});

//changing the video souce of a mobile screen
function setVideoSrc() {
    const videoSource = document.getElementById("video-source");
    if (window.innerWidth <= 768) {
        videoSource.src = "./videos/mobile _video.mp4";
    } else {
        videoSource.src = "./videos/fert1.mp4";
    }
    videoSource.parentElement.load();
}

setVideoSrc()
window.addEventListener("resize", setVideoSrc);