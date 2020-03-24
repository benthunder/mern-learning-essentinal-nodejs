const question = [
    'what is your name',
    'what would you ratthet be doing?',
    'what is your preferred programing language?'
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${question[i]}`);
}

ask();


process.stdin.on('data',data => {
    process.stdout.write(data.toString().trim());
});