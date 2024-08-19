let repeat = (value, repeater) => {
    return Array(repeater).fill(value);
    // Array(x) is a constructor to build an array with (x) positions.
    // .fill(y) is a method to fill all array positions with y member.
}

console.log(repeat("código", 2));
console.log(repeat(7, 3));
