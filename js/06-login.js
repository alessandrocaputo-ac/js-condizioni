// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 - Mi segno admin e 1234 come username e password corretti
  2 - Chiedo all'utente username e password
  3 - SE lo username è admin E la password è 1234, il messaggio è "Login effettuato", ALTRIMENTI "Credenziali errate"
  4 - Mostro in un alert il messaggio
  */

// # Fase di preparazione
const usernameCorretto = 'admin';
const passwordCorretta = '1234';
let messaggioLogin = '';

// # Fase di raccolta dati
const inserisciUsername = prompt('Inserisci Username');
const inserisciPassword = prompt('Inserisci Password');

// # Fase di elaborazione
if (inserisciUsername === usernameCorretto && inserisciPassword === passwordCorretta) {
  messaggioLogin = "Login effettuato";
} else {
  messaggioLogin = "Credenziali errate";
}

// # Fase di output
alert(messaggioLogin);
