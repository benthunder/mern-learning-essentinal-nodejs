const { getCount, inc, dec } = require('./MyModule');

inc();
inc();
dec();

console.log(getCount());


const collectionAnswer = require('./lib/collectionAnswer');



const questions = [
    "What is your name? > ",
    "Where do you live? > ",
    "How old are you? > "
];

// ansers is arg of a call back
// collectQuestion(questions);
collectQuestion(questions, answers => {
    console.log("Thank for your question");
    console.log(answers);
    process.exit();
});