// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 - Mi segno altezza minima (140 cm) ed età minima (14 anni) per poter salire
  2 - Chiedo all'utente altezza ed età
  3 - SE uno dei due dati non è un numero il messaggio è "Dati non validi",
    ALTRIMENTI SE è alto almeno 140 cm E ha almeno 14 anni "Puoi salire!",
    ALTRIMENTI "Mi dispiace, non puoi salire"
  4 - Mostro il messaggio in un alert
*/

// # Fase di preparazione
const altezzaMinima = 140;
const etaMinima = 14;
let messaggioDiAccesso = '';

// # Fase di raccolta dati
const altezzaUtente = parseInt(prompt('Quanto sei alto ?'));
const etaUtente = parseInt(prompt('Quanti anni hai ?'));

// # Fase di elaborazione
if (isNaN(altezzaUtente) || isNaN(etaUtente)) {
  messaggioDiAccesso = "Dati non validi";
} else if (altezzaUtente >= altezzaMinima && etaUtente >= etaMinima) {
  messaggioDiAccesso = "Puoi salire!";
} else {
  messaggioDiAccesso = "Mi dispiace, non puoi salire";
}

// # Fase di output
alert(messaggioDiAccesso);
