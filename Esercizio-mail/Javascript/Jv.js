/*

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

*/

// selezione del nome/cognome
const userMail = document.querySelector(".Umail");

// acquisisco l'elemento (bottone) che ha per id calcolo,
const search = document.getElementById("calcolo");

// acquisisco l'elemento che ha per classe risultato, dove andrò ad inserire il risultato
const risultato = document.querySelector(".string");

const mails = ["pippo", "j", "hj", "gj"]

// Quando viene cliccato il pulsante invia
search.addEventListener("click",

    function () {

        let val1 = userMail.value;

        document.getElementById("none").style="display:block"; 

        Fcontrol ();

        Fsearch(val1);
    }
);

// Funzione per ricerca/inserimetno in un array della mail utente
function Fsearch(val1) {

    let mailU = val1;

    // inizializzo una variabile ("contatore") a zero
    let num = 0;

    for (let i = 0; i < mails.length; i++) {
            
        //acquisisco il valore ("stringa") nella prima posizione della mia stringa
        let xMail= mails[i];
       
        //confronto i valori e in caso risultino diversi
        if (mailU != xMail){

           //aggiorno il valore ogni volta che controllo il valore e risulta diverso 
           num = num +1;

        }

        else {
             //Creo l'elemento all'interno del mio file html
             const stringa = document.createElement ("p");

             //inserisco scritta all'interno del mio contenuto
             stringa.append("Sei dei nostri, puoi procedere!");

             //inserisco stringa all'interno del mio contenitore "none"
             risultato.append(stringa);

        }

       
    }

     //Condizione necessaria per inserire l'elemento all'interno del mio array (se anche l'ultimo elemento della mia lista è diverso e sono sicuro di aver confrontato ogni altro elemento prima)
     if (num == mails.length){

         //Creo l'elemento all'interno del mio file html
        const stringa = document.createElement ("p");

        //inserisco scritta all'interno del mio contenuto
        stringa.append("la mail non è presente nell'archivio, procedo all'inserimento!.......riprovare");

        //inserisco stringa all'interno del mio contenitore "none"
        risultato.append(stringa);
    
        // Inserisco l'elemento in fondo al mio array 
        mails.push(mailU);

        console.log (mails);
        
    }



}


//Funzione di controllo sul documento html 

function Fcontrol() {

    //acquisisco i valore nel tag p(qualora ci fosse all'interno della classe string)
    const number = document.querySelector('.string p');
    
    //se è stato stampato in pagina qualcosa precedentemente
    if (number != null){

        //elimino scritta all'interno del mio contenuto
        risultato.removeChild(risultato.lastChild);
    }

    

}