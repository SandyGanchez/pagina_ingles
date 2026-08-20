// =========================================================
// FLOATING BACKGROUND LETTERS
// =========================================================

const floatingContainer =
    document.querySelector(".floating-letters");

if (floatingContainer) {

    const letters = [
        "A",
        "B",
        "C",
        "W",
        "G",
        "N",
        "?",
        "!",
        "&",
        "01",
        "02",
        "03"
    ];

    const totalLetters = 18;

    for (let i = 0; i < totalLetters; i++) {

        const element =
            document.createElement("span");

        element.classList.add("floating-letter");

        element.textContent =
            letters[
                Math.floor(
                    Math.random() * letters.length
                )
            ];

        element.style.left =
            `${Math.random() * 95}%`;

        element.style.top =
            `${Math.random() * 90}%`;

        element.style.fontSize =
            `${2 + Math.random() * 6}rem`;

        element.style.setProperty(
            "--duration",
            `${4 + Math.random() * 6}s`
        );

        element.style.setProperty(
            "--rotation",
            `${-25 + Math.random() * 50}deg`
        );

        floatingContainer.appendChild(element);

    }

}