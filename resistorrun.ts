class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r
    }
}

let r1: Resistor = new Resistor(220);
console.log(r1.getCurrent(5));
let r2: Resistor = new Resistor(4700);
console.log(r2.getCurrent(5));
let r3: Resistor = new Resistor(110);
console.log(r3.getCurrent(5));

let resistors: Array<Resistor> = [r1, r2, r3];
let totalAmperage: number = 0;
resistors.forEach((resistor) => {
    totalAmperage += resistor.getCurrent(5)
});
console.log(totalAmperage)