let areNumberBetween = (min, max, number, inclusive = false) => {
    if (inclusive) {
        return number >= min && number <= max;
    }
    else {
        return number > min && number < max;
    }
}

console.log(areNumberBetween(10, 100, 50));
console.log(areNumberBetween(16, 100, 160));
console.log(areNumberBetween(3, 150, 3));
console.log(areNumberBetween(3, 150, 3, true));