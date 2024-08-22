function person(name) {
    this.speak = () => {
        console.log(`My name is ${name}`);
    }
}

const p1 = new person('João');
p1.speak();
