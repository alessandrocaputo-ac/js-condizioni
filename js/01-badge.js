// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
1 - Mi segno nome, età e professione
2 - Mi presento in console utilizzando il segno + nel codice
3 - Mi presento in console utilizzando il template literal
4 - Calcolo quanti anni avrò tra dieci anni e lo stampo in console
*/

// # Fase di preparazione


// # Fase di raccolta dati
const nomePersona = 'Alessandro';

const etaPersona = 29;

const professionePersona = 'impiegato';


// # Fase di elaborazione
const etaDopoDieciAnni = etaPersona + 10;

// # Fase di output
console.log('Mi chiamo ' + nomePersona + ', ho ' + etaPersona + ' anni e lavoro come ' + professionePersona);
console.log(`Mi chiamo ${nomePersona}, ho ${etaPersona} anni e lavoro come ${professionePersona}`);
console.log('Fra ' + 10 + ' anni avrò ' + etaDopoDieciAnni + ' anni');