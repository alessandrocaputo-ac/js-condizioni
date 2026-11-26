// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 - Mi segno i giorni del weekend (sabato e domenica)
  2 - Chiedo all'utente in quale giorno della settimana siamo
  3 - SE risponde sabato o domenica il messaggio è "Buon weekend!", ALTRIMENTI "Buon lavoro"
  4 - Mostro in un alert la frase a seconda del giorno
*/

// # Fase di preparazione
const primoGiornoWeekend = 'sabato';
const secondoGiornoWeekend = 'domenica';
let messaggioSaluto = '';

// # Fase di raccolta dati
const giornoDellaSettimana = prompt('Che giorno della settimana è oggi ?');


// # Fase di elaborazione
if (giornoDellaSettimana === primoGiornoWeekend || giornoDellaSettimana === secondoGiornoWeekend) {
  messaggioSaluto = "Buon weekend!";
} else {
  messaggioSaluto = "Buon lavoro";
}

// # Fase di output
alert(messaggioSaluto);

