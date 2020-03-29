let count = 0;

inc = () => ++count;
dec = () => --count;

getCount = () => count;
module.exports = {
    inc, dec, getCount
};

