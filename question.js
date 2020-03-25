const question = [
    'what is your name',
    'what would you ratthet be doing?',
    'what is your preferred programing language?'
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${question[i]} > `);
}

ask();

const answer = [];

process.stdin.on('data', data => {
    answer.push(data.toString().trim());
    if (answer.length < question.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
});


process.on("exit", () => {
    const [name, activity, lang] = answer;
    console.log(` ${name} is ${activity} ${lang} `);
});