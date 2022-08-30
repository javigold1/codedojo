
class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Name= ${this.name}`);
        console.log(`Health= ${this.health}`);
        console.log(`Speed= ${this.speed}`);
        console.log(`Stength= ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja = new Ninja("Ryu");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
