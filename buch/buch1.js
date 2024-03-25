class Buch {
    constructor(titel, autor, isbn) {
      this.titel = titel;
      this.autor = autor;
      this.isbn = isbn;
      this.verfuegbar = true;
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
  
  // Testen der Buch-Klasse
  const buch1 = new Buch("Der Alchimist", "Paulo Coelho", "978-3-257-06501-3");
  const buch2 = new Buch("Harry Potter und der Stein der Weisen", "J.K. Rowling", "978-3-551-58221-1");
  
  console.log(buch1.ausleihen()); // Das Buch "Der Alchimist" wurde erfolgreich ausgeliehen.
  console.log(buch1.ausleihen()); // Das Buch "Der Alchimist" ist bereits ausgeliehen.
  
  console.log(buch2.zurueckgeben()); // Das Buch "Harry Potter und der Stein der Weisen" ist bereits verfügbar.
  console.log(buch2.ausleihen()); // Das Buch "Harry Potter und der Stein der Weisen" wurde erfolgreich ausgeliehen.


