class Temperature {
    constructor(doC) {
        this.doC = doC;
        this.sangDoF = () => this.doC * (9 / 5) + 32;
        this.sangDoK = () => this.doC + 273.15;
    }
}
let temperature = new Temperature(25);
console.log(`${temperature.sangDoF()} ℉`);
console.log(`${temperature.sangDoK()}K`);