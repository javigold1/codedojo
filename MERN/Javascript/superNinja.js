
class Ninja {
    constructor(name, health=10) {
        this.name = name;
        this.health = health;
        this.speed = 10;
        this.strength = 10;
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
class Sensei extends Ninja {
    constructor(wisdom){
        super("Jeff", "200", "10", "10", wisdom = 10);
    }
    speakWisdom() {
        this.drinkSake();
        console.log ("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const sSenei = new Sensei("Master Splinter");
sSenei.speakWisdom();
sSenei.showStats();


