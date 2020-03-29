const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// f => f is return nothing ( default is null )
module.exports = collectQuestion = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered) // Recusive callback
        } else {
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered); // Recusive callback
};
