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

    /* Break Wax Seal */
    openBtn.classList.add("break");

    /* Hide Tap Text */
    if (tapText) {
        tapText.style.opacity = "0";
    }

    /* Open Envelope */
    setTimeout(() => {

        envelope.classList.add("open");

    }, 350);

});
