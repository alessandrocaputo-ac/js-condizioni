// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 - Mi segno il prezzo del biglietto (€36), il limite di peso 23 kg) e il supplemento (€20)
  2 - Chiedo all'utente il peso della valigia
  3 - Se il peso della valigia supera i 23 kg, aggiungo il supplemento al prezzo del biglietto
  4 - Mostro in console il prezzo finale
*/

// # Fase di preparazione
let prezzoBiglietto = 36;
const limitePesoBagaglio = 23;
const supplementoBiglietto = 20;

// # Fase di raccolta dati
const pesoBagaglio = parseInt(prompt('Quanto pesa il bagaglio?'));

// # Fase di elaborazione
if (pesoBagaglio > limitePesoBagaglio) {
  prezzoBiglietto = prezzoBiglietto + supplementoBiglietto;
}

// # Fase di output
console.log('Prezzo del biglietto: ' + prezzoBiglietto + ' €');
