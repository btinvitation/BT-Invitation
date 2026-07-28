/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   PREMIUM RECEPTION INVITATION
========================================== */


/* =========================
LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "opacity 1s ease";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2000);

});


/* =========================
ENVELOPE OPENING
========================= */

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const tapText = document.querySelector(".tap-text");

let opened = false;

openBtn.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    openBtn.classList.add("break");

    if (tapText) {

        tapText.style.opacity = "0";

    }

    setTimeout(() => {

        envelope.classList.add("open");

    }, 350);

    setTimeout(() => {

        document.getElementById("story").scrollIntoView({

            behavior:"smooth"

        });

    },2500);

});
/* =========================
SCRATCH TO REVEAL
========================= */

const scratchOverlay = document.querySelector(".scratch-overlay");

if (scratchOverlay) {

    scratchOverlay.addEventListener("click", () => {

        scratchOverlay.style.opacity = "0";

        setTimeout(() => {

            scratchOverlay.style.display = "none";

        }, 800);

    });

}


/* =========================
COUNTDOWN TIMER
========================= */

const receptionDate = new Date("2026-08-30T13:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = receptionDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);
/* =========================
SCROLL ARROW
========================= */

const scrollArrow = document.querySelector(".scroll-arrow");

if (scrollArrow) {

    scrollArrow.addEventListener("click", () => {

        document.getElementById("story").scrollIntoView({

            behavior: "smooth"

        });

    });

}





/* =========================
FADE-IN ANIMATION
========================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 1s ease";

    observer.observe(section);

});
