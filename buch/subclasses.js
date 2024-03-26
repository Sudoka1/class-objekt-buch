// Basisklasse für alle Tiere
class Tier {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    machenSound() {
        return this.sound;
    }

    essen(futter) {
        return `${this.name} isst ${futter}.`;
    }
}

// Unterklasse für Kühe
class Kuh extends Tier {
    constructor(name) {
        super(name, "Muh!");
    }

    essen() {
        return super.essen("Gras");
    }
}

// Unterklasse für Hühner
class Huehner extends Tier {
    constructor(name) {
        super(name, "Kikeriki!");
    }

    essen() {
        return super.essen("Körner");
    }
}

// Unterklasse für Lamme
class Lamm extends Tier {
    constructor(name) {
        super(name, "Beee!");
    }

    essen() {
        return super.essen("Lammeefutter");
    }
}

// Erstellen von Instanzen der verschiedenen Tiere
const kuh1 = new Kuh("Berta");
const kuh2 = new Kuh("Molly");
const huehner1 = new Huehner("Hansi");
const huehner2 = new Huehner("Frieda");
const lamm1 = new Lamm("Schaf");
const lamm2 = new Lamm("Ferkel");

// Ausgabe der Informationen über die Tiere
console.log(kuh1.name + " macht: " + kuh1.machenSound()); // Berta macht: Muh!
console.log(kuh1.essen()); // Berta isst Gras.

console.log(huehner1.name + " macht: " + huehner1.machenSound()); // Hansi macht: Kikeriki!
console.log(huehner1.essen()); // Hansi isst Körner.

console.log(lamm1.name + " macht: " + lamm1.machenSound()); // Schaf macht: Beee!
console.log(lamm1.essen()); // Wutz isst Lammeefutter.