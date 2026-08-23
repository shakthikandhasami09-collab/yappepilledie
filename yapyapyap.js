function checkPassword() {

    let password = document.getElementById("passwordInput").value;

    if (password === "yappe") {

        // Correct password
        document.getElementById("passwordBox").style.display = "none";
        document.getElementById("website").style.display = "block";

    } else {

        // Wrong password
        document.getElementById("passwordBox").style.display = "none";
        document.getElementById("locked").style.display = "block";

    }
}

function submitQuiz() {

    let score = 0;

    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "A") {
        score += 2;
    }


    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "B") {
        score += 2;
    }


    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "A") {
        score += 2;
    }


    // Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value === "A") {
        score += 2;
    }


    // Question 5
    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q5 && q5.value === "E") {
        score += 2;
    }


    // Question 6
    // Both A (His charm) and E (His obsession) are correct.
    let q6 = document.querySelector('input[name="q6"]:checked');

    if (q6 && (q6.value === "A" || q6.value === "E")) {
        score += 2;
    }


    // Display result
    document.getElementById("result").innerHTML =
        "Your score is " + score + " / 12";
}