document.addEventListener("DOMContentLoaded", () => {
  const practiceForm = document.getElementById("practice-form");

  practiceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const totalQuestions = 3;

    // Question 1 Check
    const q1Val = document.getElementById("q1").value;
    const feedbackQ1 = document.getElementById("feedback-q1");
    if (q1Val === "correct") {
      score++;
      feedbackQ1.textContent = "✓ Correct!";
      feedbackQ1.className = "feedback correct";
    } else {
      feedbackQ1.textContent = "✗ Incorrect. Correct order: Beautiful (appearance), shy (personality), tall (size).";
      feedbackQ1.className = "feedback wrong";
    }

    // Question 2 Check
    const q2Val = document.getElementById("q2").value.trim().toLowerCase();
    const feedbackQ2 = document.getElementById("feedback-q2");
    const validAgeAdjectives = ["ancient", "old", "historic", "antique", "modern"];
    
    if (validAgeAdjectives.includes(q2Val)) {
      score++;
      feedbackQ2.textContent = "✓ Correct!";
      feedbackQ2.className = "feedback correct";
    } else {
      feedbackQ2.textContent = "✗ Try adjectives like 'ancient', 'old', or 'historic'.";
      feedbackQ2.className = "feedback wrong";
    }

    // Question 3 Check
    const q3Selected = document.querySelector('input[name="q3"]:checked');
    const feedbackQ3 = document.getElementById("feedback-q3");
    
    if (q3Selected && q3Selected.value === "correct") {
      score++;
      feedbackQ3.textContent = "✓ Correct! Color (red) comes before Material (plastic).";
      feedbackQ3.className = "feedback correct";
    } else {
      feedbackQ3.textContent = "✗ Incorrect. Remember: Color comes before Material.";
      feedbackQ3.className = "feedback wrong";
    }

    setTimeout(() => {
      alert(`Score: ${score} / ${totalQuestions}`);
    }, 100);
  });
});