module.exports = function reverse(n) {
    if (n <= 0) {
        n = -n
    }
    let text = n;
    let ReverseText = text.toString().split("").reverse().join("");
    return Math.abs(ReverseText);
};
