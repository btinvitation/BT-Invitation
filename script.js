/* ==========================================
   BHUVANESHWARI ❤️ THYAGU
   PREMIUM RECEPTION INVITATION
   SCRIPT PART 3A
========================================== */



/* =========================
LOADER
========================= */


window.addEventListener("load",()=>{


    const loader = document.getElementById("loader");


    setTimeout(()=>{


        loader.style.opacity="0";


        loader.style.transition="1s ease";


        setTimeout(()=>{


            loader.style.display="none";


        },1000);



    },2000);



});






/* =========================
3D ENVELOPE OPENING
========================= */


const openBtn = document.getElementById("openBtn");

const envelope = document.getElementById("envelope");

const tapText = document.querySelector(".tap-text");





openBtn.addEventListener("click",()=>{


    envelope.classList.add("open");



    tapText.style.opacity="0";



});

/* =========================
SCRATCH TO REVEAL
========================= */


const scratchOverlay = document.querySelector(".scratch-overlay");


scratchOverlay.addEventListener("click",()=>{


    scratchOverlay.style.opacity="0";


    scratchOverlay.style.transition="1s";


    setTimeout(()=>{


        scratchOverlay.style.display="none";


    },1000);



});







/* =========================
COUNTDOWN TIMER
========================= */


const receptionDate = new Date(
    "August 30, 2026 13:30:00"
).getTime();



function updateCountdown(){


    const now = new Date().getTime();


    const distance = receptionDate - now;



    const days = Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const hours = Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minutes = Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const seconds = Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );



    document.getElementById("days").innerHTML =
    days;



    document.getElementById("hours").innerHTML =
    hours;



    document.getElementById("minutes").innerHTML =
    minutes;



    document.getElementById("seconds").innerHTML =
    seconds;



}



setInterval(updateCountdown,1000);


updateCountdown();

/* =========================
SCROLL ARROW
========================= */


const scrollArrow = document.querySelector(".scroll-arrow");


if(scrollArrow){


    scrollArrow.addEventListener("click",()=>{


        document
        .getElementById("story")
        .scrollIntoView({

            behavior:"smooth"

        });


    });


}






/* =========================
FADE IN ON SCROLL
========================= */


const sections = document.querySelectorAll(
    "section"
);



const observer = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},
{

    threshold:0.2

});



sections.forEach(section=>{


    observer.observe(section);


});
