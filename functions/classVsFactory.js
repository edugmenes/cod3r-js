// Need to use this:
class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Person('João');
p1.speak();

// Don't need to use this:
const createPerson = (name) => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('Lucas');
p2.speak();