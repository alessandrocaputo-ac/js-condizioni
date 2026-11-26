// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
1 - Mi segno il confine tra Testa e Croce (0.5)
2 - Pesco un numero a caso
3 - SE il numero è minore di 0.5 esce Testa, ALTRIMENTI Croce
4 - Mostro il risultato con alert e stampo in console il numero pescato
*/

// # Fase di preparazione
const confineNumero = 0.5;
let risultatoLancio = '';

// # Fase di raccolta dati
const numeroPescato = Math.random();

// # Fase di elaborazione
if (numeroPescato < confineNumero) {
  risultatoLancio = "Testa";
} else {
  risultatoLancio = "Croce";
}

// # Fase di output
alert(risultatoLancio);
console.log(numeroPescato);
