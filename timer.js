const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    let p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${p}%`);
}

process.stdout.write(`setting a ${waitTime / 1000} second delay\n`);

const timeFinised = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timeFinised, waitTime);