document.addEventListener('DOMContentLoaded', () => {
    
    // --- EVALUATION: ACTIVE VOICE ---
    const checkActiveBtn = document.getElementById('checkActiveBtn');
    const feedbackActive = document.getElementById('feedbackActive');

    checkActiveBtn.addEventListener('click', () => {
        let score = 0;
        const totalQuestions = 3;
        const feedbackDetails = [];

        // Q1: Active Conversion
        const q1 = document.getElementById('q1Input').value.trim().toLowerCase();
        if (q1 === "shakespeare wrote hamlet." || q1 === "shakespeare wrote hamlet") {
            score++;
        } else {
            feedbackDetails.push("<b>Q1:</b> Correct answer is <i>'Shakespeare wrote Hamlet.'</i>");
        }

        // Q2: Active Fill in the blank
        const q2 = document.getElementById('q2Input').value.trim().toLowerCase();
        if (q2 === "sells") {
            score++;
        } else {
            feedbackDetails.push("<b>Q2:</b> Correct verb form is <i>'sells'</i>.");
        }

        // Q3: Active Multiple Choice
        const q3Selected = document.querySelector('input[name="q3"]:checked');
        if (q3Selected && q3Selected.value === "correct") {
            score++;
        } else {
            feedbackDetails.push("<b>Q3:</b> Correct sentence is <i>'The chef prepared a delicious dinner.'</i>");
        }

        // Show Feedback Active
        feedbackActive.className = "alert mb-4"; // Reiniciar clases
        
        if (score === totalQuestions) {
            feedbackActive.classList.add('alert-success');
            feedbackActive.innerHTML = `<strong>Perfect! 🎉</strong> Active Voice Score: ${score}/${totalQuestions}. Excellent work!`;
        } else if (score > 0) {
            feedbackActive.classList.add('alert-warning');
            feedbackActive.innerHTML = `<strong>Good job! 👍</strong> Active Voice Score: ${score}/${totalQuestions}.<br>` + feedbackDetails.join('<br>');
        } else {
            feedbackActive.classList.add('alert-danger');
            feedbackActive.innerHTML = `<strong>Keep practicing! 💪</strong> Active Voice Score: ${score}/${totalQuestions}.<br>` + feedbackDetails.join('<br>');
        }

        feedbackActive.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // --- EVALUATION: PASSIVE VOICE ---
    const checkPassiveBtn = document.getElementById('checkPassiveBtn');
    const feedbackPassive = document.getElementById('feedbackPassive');

    checkPassiveBtn.addEventListener('click', () => {
        let score = 0;
        const totalQuestions = 3;
        const feedbackDetails = [];

        // Q4: Passive Conversion
        const q4 = document.getElementById('q4Input').value.trim().toLowerCase();
        if (q4 === "the car was repaired by the mechanic." || q4 === "the car was repaired by the mechanic" || q4 === "the car was repaired") {
            score++;
        } else {
            feedbackDetails.push("<b>Q4:</b> Correct answer is <i>'The car was repaired by the mechanic.'</i>");
        }

        // Q5: Passive Fill in the blank
        const q5 = document.getElementById('q5Input').value.trim().toLowerCase();
        if (q5 === "this newspaper is read by millions of people." || q5 === "this newspaper is read by millions of people") {
            score++;
        } else {
            feedbackDetails.push("<b>Q5:</b> Correct answer is <i>'This newspaper is read by millions of people.'</i>");
        }

        // Q6: Passive Multiple Choice
        const q6Selected = document.querySelector('input[name="q6"]:checked');
        if (q6Selected && q6Selected.value === "correct") {
            score++;
        } else {
            feedbackDetails.push("<b>Q6:</b> Correct sentence is <i>'The room is cleaned every morning.'</i>");
        }

        // Show Feedback Passive
        feedbackPassive.className = "alert mb-4"; // Reiniciar clases

        if (score === totalQuestions) {
            feedbackPassive.classList.add('alert-success');
            feedbackPassive.innerHTML = `<strong>Awesome! 🎉</strong> Passive Voice Score: ${score}/${totalQuestions}. Perfect answers!`;
        } else if (score > 0) {
            feedbackPassive.classList.add('alert-warning');
            feedbackPassive.innerHTML = `<strong>Good effort! 👍</strong> Passive Voice Score: ${score}/${totalQuestions}.<br>` + feedbackDetails.join('<br>');
        } else {
            feedbackPassive.classList.add('alert-danger');
            feedbackPassive.innerHTML = `<strong>Keep practicing! 💪</strong> Passive Voice Score: ${score}/${totalQuestions}.<br>` + feedbackDetails.join('<br>');
        }

        feedbackPassive.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});