// =========================================================
// PLANNING A COMPOSITION
// PAGE ANIMATIONS
// =========================================================



// =========================================================
// 1. ANIMATED HERO TITLE
// =========================================================

const animatedLines =
    document.querySelectorAll(
        ".animated-line"
    );


animatedLines.forEach(
    (line, lineIndex) => {

        const text =
            line.textContent.trim();

        line.textContent = "";


        [...text].forEach(
            (
                character,
                characterIndex
            ) => {

                const span =
                    document.createElement(
                        "span"
                    );


                span.classList.add(
                    "animated-character"
                );


                if (
                    character === " "
                ) {

                    span.innerHTML =
                        "&nbsp;";

                } else {

                    span.textContent =
                        character;

                }


                const delay =
                    (
                        lineIndex *
                        0.45
                    ) +
                    (
                        characterIndex *
                        0.04
                    );


                span.style.animationDelay =
                    `${delay}s`;


                line.appendChild(
                    span
                );

            }
        );

    }
);



// =========================================================
// 2. SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "reveal-visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {

            threshold:
                0.12,

            rootMargin:
                "0px 0px -40px 0px"

        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



// =========================================================
// 3. NAVBAR SCROLL EFFECT
// =========================================================

const navbar =
    document.querySelector(
        ".navbar"
    );


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (
        window.scrollY > 30
    ) {

        navbar.classList.add(
            "navbar-scrolled"
        );

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);


updateNavbar();



// =========================================================
// 4. ACTIVE NAVIGATION LINK
// =========================================================

const navigationLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const id =
                        entry.target.id;


                    navigationLinks
                        .forEach(
                            link => {

                                link.classList
                                    .remove(
                                        "active"
                                    );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                ) {

                                    link.classList
                                        .add(
                                            "active"
                                        );

                                }

                            }
                        );

                }
            );

        },

        {

            threshold:
                0.35

        }

    );


sections.forEach(
    section => {

        navigationObserver.observe(
            section
        );

    }
);



// =========================================================
// 5. CLOSE MOBILE NAVBAR AFTER CLICK
// =========================================================

navigationLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                const menu =
                    document.querySelector(
                        "#lessonNavbar"
                    );


                if (
                    menu &&
                    menu.classList.contains(
                        "show"
                    ) &&
                    typeof bootstrap !==
                    "undefined"
                ) {

                    const collapse =
                        bootstrap.Collapse
                            .getOrCreateInstance(
                                menu
                            );


                    collapse.hide();

                }

            }
        );

    }
);