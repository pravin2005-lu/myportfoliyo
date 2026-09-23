/* =========================================================
   PRAVIN KUMAR S
   PREMIUM PORTFOLIO
   JAVASCRIPT
========================================================= */


/* =========================================================
   01. PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


/* =========================================================
   02. SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-text, " +
    ".stat-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-card, " +
    ".certificate-card, " +
    ".contact-content"
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   03. STAGGER ANIMATION FOR SKILLS
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================================================
   04. STAGGER ANIMATION FOR PROJECTS
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});


/* =========================================================
   05. STAGGER ANIMATION FOR CERTIFICATIONS
========================================================= */

const certificateCards =
    document.querySelectorAll(".certificate-card");


certificateCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.10}s`;

});


/* =========================================================
   06. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   07. HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   08. SMOOTH NAVIGATION
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);

            if (!target) return;


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.offsetTop -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =========================================================
   09. MOUSE PARALLAX EFFECT
========================================================= */

const heroPhoto =
    document.querySelector(
        ".hero-photo-area"
    );


const heroGlow =
    document.querySelector(
        ".photo-background"
    );


if (heroPhoto && heroGlow) {

    heroPhoto.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroPhoto.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const moveX =
                (x - centerX) / 30;

            const moveY =
                (y - centerY) / 30;


            heroGlow.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroPhoto.addEventListener(
        "mouseleave",
        () => {

            heroGlow.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================================================
   10. PROJECT CARD TILT EFFECT
========================================================= */

projectCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 768
            ) {

                return;

            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                (centerY - y) / 35;

            const rotateY =
                (x - centerX) / 35;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   11. SKILL CARD TILT
========================================================= */

skillCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth <= 768
            ) {

                return;

            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const rotateX =
                (rect.height / 2 - y) / 35;

            const rotateY =
                (x - rect.width / 2) / 35;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================================
   12. CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");


cursorGlow.className =
    "cursor-glow";


document.body.appendChild(
    cursorGlow
);


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   13. BACK TO TOP BUTTON
========================================================= */

const backToTop =
    document.createElement("button");


backToTop.className =
    "back-to-top";


backToTop.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


document.body.appendChild(
    backToTop
);


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   14. TYPEWRITER EFFECT
========================================================= */

const heroSubtitle =
    document.querySelector(".hero h2");


if (heroSubtitle) {

    const originalText =
        heroSubtitle.textContent.trim();


    heroSubtitle.textContent = "";


    let characterIndex = 0;


    function typeText() {

        if (
            characterIndex <
            originalText.length
        ) {

            heroSubtitle.textContent +=
                originalText.charAt(
                    characterIndex
                );

            characterIndex++;

            setTimeout(
                typeText,
                45
            );

        }

    }


    setTimeout(
        typeText,
        800
    );

}


/* =========================================================
   15. CONTACT EMAIL PROTECTION
========================================================= */

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );


emailLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            console.log(
                "Email link clicked."
            );

        }
    );

});


/* =========================================================
   16. CONSOLE MESSAGE
========================================================= */

console.log(
    "%cPravin Kumar S | Portfolio",
    "font-size:18px;font-weight:bold;color:#7427e8;"
);

console.log(
    "Welcome to my portfolio."
);








