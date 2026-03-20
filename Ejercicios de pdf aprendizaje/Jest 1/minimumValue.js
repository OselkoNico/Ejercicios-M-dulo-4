const minimumValue = (a, b) => {
    if(a>=b && a > 100){
        return a;
    } else if (b>=a && b > 100){
        return b;
    } else {
        return 100;
    }
}

module.exports = minimumValue;