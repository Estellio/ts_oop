class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    u: number = 0;
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getPowerI(u:number, i: number): number {
        return u * i;
    }
    getAmps(w: number, u: number): number {
        return w / u
    }
    getResistance(u:number, i: number): number {
        return u / i
    }
}

let r1 = new Resistor(220);
console.log(r1.getPower(5).toFixed(2));

// Takistile mõjub pinge 5 volti (U) ning seda läbib vool 2 amprit (I). Mitu vatti soojust eraldub takistist?
let r2 = new Resistor(0)
console.log(`${r2.getPowerI(5, 2)} vatti`)

// Takistile mõjub pinge 4 volti (U) ning sealt eraldub võimsus 6 vatti (W = I * U). Mitu amprit (I) voolu läbib takistit (I = W / U)?
let r3 = new Resistor(0)
console.log(`${r3.getAmps(6, 4)} amprit`)

// Mitu oomi on eelneva takisti takistus (R = U / I)?
console.log(`${r3.getResistance(4, 1.5).toFixed(2)} oomi`)

// Veekeedukannu võimsuseks on 1 kilovatt, seal sees on vett 1 liiter. Mitme kraadi peale tõuseb vee temperatuur 20 kraadi Celsiuse pealt ühe minutiga, kui kogu sisselülitatud kannu võimsus läheb vee soojendamiseks?
//  1kW = 1000Js
// 1kg (1l) vee soojendamiseks kulub 4200J

function veeTemp(aeg_s: number, dzaul: number, v_erisoojus: number, v_temp: number) {
    console.log(`Vesi soojeneb ${Math.round(v_temp + aeg_s * dzaul / v_erisoojus)} kraadini`)
}
veeTemp(60, 1000, 4200, 20)

//Mitu amprit voolu läbib eelnimetatud veekeedukannu, kui võrgupinge on 220 volti?
//pinge(U) = 220 volti; võimsus = 1kW = 1000W; voolutugevus(I) = ? amprit
let k_kann = new Resistor(0)
console.log(`${k_kann.getAmps(1000, 220).toFixed(2)} amprit`)

//Mitu oomi on selle veekeedukannu takistus?
//pinge(U) = 220 volti; voolutugevus(I) = 4.55 amprit; takistus (R)= ? oomi
console.log(`${k_kann.getResistance(220, 4.55).toFixed(2)} oomi`)
