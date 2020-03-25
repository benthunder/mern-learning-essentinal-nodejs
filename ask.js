const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name? > ",
    "Where do you live? > ",
    "How old are you? > "
];


collectionQuestion = (questions , done ) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered)
        }else{
            done(answers);
        }
    }  

    rl.question(firstQuestion, questionAnswered);
};

collectionQuestion(questions , answers => {
    console.log("Thank for your question");
    console.log(answers);
    process.exit();
});