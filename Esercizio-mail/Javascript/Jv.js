/*

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

*/

// selezione del nome/cognome
const userMail = document.querySelector(".Umail");

// acquisisco l'elemento (bottone) che ha per id calcolo,
const search = document.getElementById("calcolo");

// acquisisco l'elemento (bottone) che ha per id cencella,
const delButton = document.getElementById("cencella");

// acquisisco l'elemento che ha per classe risultato, dove andrò ad inserire il risultato
const risultato = document.querySelector(".pippo");

console.log (userMail);


const mails = ["pippo@hotmail.com", "pluto@outlook.com"]

// Quando viene cliccato il pulsante invia
search.addEventListener("click",

    function () {

        let val1 = userMail.value;
        Fsearch(val1);
    }
);


// Quando viene cliccato il pulsante annulla
delButton.addEventListener("click",

    function() {

        document.getElementById("none").style="display:none"; 

    }

);

