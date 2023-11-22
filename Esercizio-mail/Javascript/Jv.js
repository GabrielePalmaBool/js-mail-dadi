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
const risultato = document.querySelector(".string");

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

// Funzione per ricerca/inserimetno in un array della mail utente
function Fsearch(val1) {

    let mailU = val1;

    console.log (mailU);

    for (let i = 0; i<=mails.length; i++) {
            
        let xMail = mails[i];
        
        if (mailU == xMail){

            document.getElementById("none").style="display:block"; 

            //Creo l'elemento all'interno del mio file html
            const stringa = document.createElement ("p");

            //inserisco scritta all'interno del mio contenuto
            stringa.append("Sei dei nostri, puoi procedere!");

            //inserisco stringa all'interno del mio contenitore "none"
            risultato.append(stringa);
        }


    }


}