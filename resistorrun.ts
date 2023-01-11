class Resistorrun {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
}

let r1: Resistorrun = new Resistorrun(220);
console.log(r1.getCurrent(5));