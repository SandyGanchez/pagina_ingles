

const teacher = document.querySelector(".teacher-wrapper");

if (teacher) {

    function updateTeacherExpression() {

        /*
         * Si el usuario baja más de 20px,
         * mostramos la teacher guiñando.
         */
        if (window.scrollY >= 20) {

            teacher.classList.add("is-winking");

        } else {

            /*
             * Cuando vuelve arriba,
             * mostramos nuevamente la teacher normal.
             */
            teacher.classList.remove("is-winking");

        }

    }


    // Detectar scroll
    window.addEventListener(
        "scroll",
        updateTeacherExpression,
        { passive: true }
    );


    // Revisar estado al cargar la página
    updateTeacherExpression();

}