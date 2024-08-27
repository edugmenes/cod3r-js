// Literal notation:
let employee = {
    fullname: 'Eduardo Gimenes',
    salary: 100000,
    faults: 10,
    calculateSalary1() {
        return (this.salary / 30) * (30 - this.faults);
    }
}

console.log(employee.fullname);
console.log(employee.calculateSalary1());

// Object in JS:
const employee2 = new Object;

console.log(typeof Object, typeof new Object);
console.log(employee2);

// Constructor functions:
function employee3(name, salary, faults) {
    this.fullname = name,
    this.salary = salary,
    this.faults = faults,
    this.calculateSalary2 = () => {
        return (salary / 30) * (30 - faults);
    }
}

const newEmployee1 = new employee3('Eduardo Gimenes', 100000, 10);
const newEmployee2 = new employee3('Leonardo Gimenes', 200000, 8);

console.log(newEmployee1.calculateSalary2(), newEmployee2.calculateSalary2());

// Factory function:
function createEmployee(name, salary, faults) {
    return {
        name, 
        salary,
        faults,
        calculateSalary3() {
            return (salary / 30) * (30 - faults)
        }
    }
}

const employee4 = createEmployee('Eduardo Gimenes', 100000, 10);
const employee5 = createEmployee('Leonardo Gimenes', 200000, 8);
console.log(employee4.calculateSalary3(), employee5.calculateSalary3());