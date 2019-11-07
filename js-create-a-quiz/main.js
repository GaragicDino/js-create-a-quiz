// Quiz Assignment

// Global Variables
let score = 0;
let percent = 0;
let canPlayQuiz = true;

// Event Listener
document.getElementById('mark-quiz-btn').addEventListener('click', markQuiz)

// Event Functions
function markQuiz() {

    if (canPlayQuiz == true) {
        let answer1 = document.getElementById('inputAnswer1').value;
        let answer2 = document.getElementById('inputAnswer2').value;
        let answer3 = document.getElementById('inputAnswer3').value;
        let answer4 = document.getElementById('inputAnswer4').value;



        // Right Answers
        if (answer1 == 'Master Chief') {
            // Outcome

            document.getElementById('inputAnswer1').style.backgroundColor = 'green';
            let message = 'Great job. Keep it up'
            document.getElementById('end-result').innerHTML = message;
            score = score + 1
            percent = percent + 25
            console.log('test')


        } else {
            document.getElementById('inputAnswer1').style.backgroundColor = 'red';

        }

        // Right Answers
        if (answer2 == 'Jun 29th 2007') {

            // Outcome
            document.getElementById('inputAnswer2').style.backgroundColor = 'green';
            let message = 'Great job. Keep it up'
            document.getElementById('end-result').innerHTML = message;
            score = score + 1
            percent = percent + 25


        } else {
            document.getElementById('inputAnswer2').style.backgroundColor = 'red';

        }

        // Question 3 code

        // Right Answers
        if (answer3 == '1969') {
            // Outcome

            document.getElementById('inputAnswer3').style.backgroundColor = 'green';
            let message = 'Great job. Keep it up'
            document.getElementById('end-result').innerHTML = message;
            score = score + 1
            percent = percent + 25


        } else {
            document.getElementById('inputAnswer3').style.backgroundColor = 'red';

        }

        // Question 4 code
        if (answer4 == 'Nicholas Cage') {
            // Outcome

            document.getElementById('inputAnswer4').style.backgroundColor = 'green';
            let message = 'Great job. Keep it up'
            document.getElementById('end-result').innerHTML = message;
            score = score + 1
            percent = percent + 25


        } else {
            document.getElementById('inputAnswer4').style.backgroundColor = 'red';

        }


        // Output score/percent in the right spot
        console.log(score)
        console.log(percent)
        document.getElementById('score').innerHTML = score
        document.getElementById('percent').innerHTML = percent
        canPlayQuiz = false;
    }

    // Questions




}












