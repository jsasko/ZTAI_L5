Quiz = function() {
    const myQuestions = [
        {
            question: "Jakiego koloru jest zielony tramwaj?",
            answers: {
                a: "niebieski",
                b: "czerowny",
                c: "zielony"
            },
            correctAnswer: "c"
},
        {
            question: "Wskaż ocean:",
            answers: {
                a: "Spokojny",
                b: "Urugwajski",
                c: "Ural"
            },
            correctAnswer: "a",
},
        {
            question: "Firma produkująca samochody",
            answers: {
                a: "Fiat",
                b: "Steelseries",
                c: "Razer"
            },
            correctAnswer: "a"
},
        {
            question: "Język programowania",
            answers: {
                a: "HTML",
                b: "Java Script",
                c: "Snake"
            },
            correctAnswer: "b"
}
];

    function buildQuiz() {
            const output = [];
            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answers = [];

                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                         <input type="checkbox" name="question${questionNumber}" value="${letter}">
                          ${letter} :
                          ${currentQuestion.answers[letter]}
                       </label>`
                    );
                }

                output.push(
                    `<div class="slide">
                       <div class="question card-header""> ${currentQuestion.question} </div>
                       <div class="answers"> ${answers.join("")}</div>
                     </div>`
                );
            });
            quizContainer.innerHTML = output.join("");
        }

        function showResults() {
            const answerContainers = quizContainer.querySelectorAll(".answers");

            let numCorrect = 0;

            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                console.log(userAnswer);
                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                } else {
                    
                }
            });

            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }

        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
                previousButton.style.display = "none";
            } else {
                previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }

        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

        const quizContainer = document.getElementById("quiz");
        const resultsContainer = document.getElementById("results");
        const submitButton = document.getElementById("submit");

        buildQuiz();

        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        showSlide(0);

        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    };