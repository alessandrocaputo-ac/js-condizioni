// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
1 - Mi segno la mancia di 10 €
2 - Chiedo il totale del conto
3 - Chiedo quante persone sono presenti
4 - Aggiungo 10 € di mancia al totale e lo divido per le persone presenti
5 - Creo un alert che mi riporta la quota di ogni persona presente con due decimali
*/

// # Fase di preparazione
const manciaCameriere = 10;

// # Fase di raccolta dati
const totaleConto = parseInt(prompt('Quanto è il totale del conto?'));
const totalePersone = parseInt(prompt('Quante persone ci sono al tavolo?'));

// # Fase di elaborazione
const quotaPerPersona = (totaleConto + manciaCameriere) / totalePersone;

// # Fase di output
alert('A testa: ' + quotaPerPersona.toFixed(2) + ' €');
