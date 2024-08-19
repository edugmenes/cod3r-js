let booleanOrNumericValue = (value) => {
    const type = typeof(value);

    if (type == "boolean") {
        return !value;
    }
    else if (type == "number") {
        return value * -1;
    }
    else {
        return `booleano ou número esperado, mas o parâmetro é do type ${type}`
    }
}

console.log(booleanOrNumericValue(true));
console.log(booleanOrNumericValue("6"));
console.log(booleanOrNumericValue(-2000));
console.log(booleanOrNumericValue("programação"));