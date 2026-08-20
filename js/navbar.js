// =========================================================
// NAVBAR
// =========================================================

const navbar =
    document.querySelector(".navbar");

const navLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


/* ---------------------------------------------------------
   Navbar style when scrolling
--------------------------------------------------------- */

function updateNavbar() {

    if (window.scrollY > 30) {

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
    { passive: true }
);

updateNavbar();


/* ---------------------------------------------------------
   Close mobile menu after selecting an option
--------------------------------------------------------- */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const menu =
            document.querySelector(
                "#navbarNav"
            );

        if (
            menu &&
            menu.classList.contains("show")
        ) {

            const collapse =
                bootstrap.Collapse.getOrCreateInstance(
                    menu
                );

            collapse.hide();

        }

    });

});


/* ---------------------------------------------------------
   Active section
--------------------------------------------------------- */

const sections =
    document.querySelectorAll(
        "section[id], header[id]"
    );

const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {
    sectionObserver.observe(section);
});