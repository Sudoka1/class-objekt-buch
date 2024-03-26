class Buch {
    constructor(titel, autor, isbn) {
        this.titel = titel;
        this.autor = autor;
        this.isbn = isbn;
        this.verfuegbar = true; // Standardmäßig als verfügbar kennzeichnen
    }

    ausleihen() {
        if (this.verfuegbar) {
            this.verfuegbar = false;
            return `Das Buch "${this.titel}" wurde erfolgreich ausgeliehen.`;
        } else {
            return `Das Buch "${this.titel}" ist bereits ausgeliehen.`;
        }
    }

    zurueckgeben() {
        if (!this.verfuegbar) {
            this.verfuegbar = true;
            return `Das Buch "${this.titel}" wurde erfolgreich zurückgegeben.`;
        } else {
            return `Das Buch "${this.titel}" ist bereits verfügbar.`;
        }
    }
}

const buch1 = new Buch("Genius Sudo", "Sabir R. Suleyman", "978-3-608-93220-6");
const buch2 = new Buch("Karate-do, der Weg für die Perfektion", "Sabir R. Suleyman", "978-3-12-002948-9");

console.log(buch1.ausleihen()); // Das Buch "Genius Sudo" wurde erfolgreich ausgeliehen.
console.log(buch1.ausleihen()); // Das Buch "Genius Sudo" ist bereits ausgeliehen.
console.log(buch1.zurueckgeben()); // Das Buch "Genius Sudo" wurde erfolgreich zurückgegeben.

console.log(buch2.ausleihen()); // Das Buch "Karate-do, der Weg für die Perfektion" wurde erfolgreich ausgeliehen.
console.log(buch2.zurueckgeben()); // Das Buch "Karate-do, der Weg für die Perfektion" wurde erfolgreich zurückgegeben.
console.log(buch2.zurueckgeben()); // Das Buch "Karate-do, der Weg für die Perfektion" ist bereits verfügbar..