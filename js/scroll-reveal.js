// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(`
    .learning-card,
    .topic-card,
    .unit-header,
    .special-section,
    .section-title,
    .section-subtitle
`);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }

    );


revealElements.forEach(element => {
    revealObserver.observe(element);
});