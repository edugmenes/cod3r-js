// scope created when you define a function
// allows access to variables external to the function

const x = 'Global'

function outside() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside;
}

const myFunc = outside();
console.log(myFunc());