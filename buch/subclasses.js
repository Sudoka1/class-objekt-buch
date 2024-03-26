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

// Unterklasse für Schweine
class Schwein extends Tier {
    constructor(name) {
        super(name, "Oink!");
    }

    essen() {
        return super.essen("Schweinefutter");
    }
}

// Erstellen von Instanzen der verschiedenen Tiere
const kuh1 = new Kuh("Berta");
const kuh2 = new Kuh("Molly");
const huehner1 = new Huehner("Hansi");
const huehner2 = new Huehner("Frieda");
const schwein1 = new Schwein("Wutz");
const schwein2 = new Schwein("Ferkel");

// Ausgabe der Informationen über die Tiere
console.log(kuh1.name + " macht: " + kuh1.machenSound()); // Berta macht: Muh!
console.log(kuh1.essen()); // Berta isst Gras.

console.log(huehner1.name + " macht: " + huehner1.machenSound()); // Hansi macht: Kikeriki!
console.log(huehner1.essen()); // Hansi isst Körner.

console.log(schwein1.name + " macht: " + schwein1.machenSound()); // Wutz macht: Oink!
console.log(schwein1.essen()); // Wutz isst Schweinefutter.