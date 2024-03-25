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

const buch1 = new Buch("Der Herr der Ringe", "J.R.R. Tolkien", "978-3-608-93220-6");
const buch2 = new Buch("Harry Potter und der Stein der Weisen", "J.K. Rowling", "978-3-12-002948-9");

console.log(buch1.ausleihen()); // Das Buch "Der Herr der Ringe" wurde erfolgreich ausgeliehen.
console.log(buch1.ausleihen()); // Das Buch "Der Herr der Ringe" ist bereits ausgeliehen.
console.log(buch1.zurueckgeben()); // Das Buch "Der Herr der Ringe" wurde erfolgreich zurückgegeben.

console.log(buch2.ausleihen()); // Das Buch "Harry Potter und der Stein der Weisen" wurde erfolgreich ausgeliehen.
console.log(buch2.zurueckgeben()); // Das Buch "Harry Potter und der Stein der Weisen" wurde erfolgreich zurückgegeben.
console.log(buch2.zurueckgeben()); // Das Buch "Harry Potter und der Stein der Weisen" ist bereits verfügbar.