// constructor functions cannot be arrow type:
function car(maxSpeed = 200, delta = 5) { 
    // private atribute:
    let currentSpeed = 0;

    // public method:
    this.acelerar = () => {
        if (currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta;
        }
        else {
            currentSpeed = maxSpeed;
        }
    }

    // public method:
    this.getCurrentSpeed = () => {
        return currentSpeed;
    }
}

const uno = new car;
uno.acelerar();
console.log(uno.getCurrentSpeed());

const ferrari = new car(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getCurrentSpeed());