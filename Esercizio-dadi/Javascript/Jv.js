/*

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

//Svolgimento

//acquisico random il primo numero;
const val1 = Math.floor(Math.random() * 7);

//acquisico random il secondo numero;
const val2 = Math.floor(Math.random() * 7);

// acquisisco l'elemento che ha per classe string dalla mia pagina html
const risultatoHTML = document.querySelector(".string");

if (val1 > val2) {

    document.getElementById("none").style="display:block"; 

    //Creo l'elemento all'interno del mio file html
    const stringa = document.createElement ("p");

    //inserisco scritta all'interno del mio contenuto
    stringa.append("Ha vinto GIOCATORE con il punteggio di:"+ val1);

    //inserisco stringa all'interno del mio contenitore "none"
    risultatoHTML.append(stringa);

}

else if (val1 < val2) {

    document.getElementById("none").style="display:block"; 

    //Creo l'elemento all'interno del mio file html
    const stringa = document.createElement ("p");

    //inserisco scritta all'interno del mio contenuto
    stringa.append("Ha vinto COMPUTER con il punteggio di:"+ val2);

    //inserisco stringa all'interno del mio contenitore "none"
    risultatoHTML.append(stringa);

}


else {

    document.getElementById("none").style="display:block"; 

    //Creo l'elemento all'interno del mio file html
    const stringa = document.createElement ("p");

    //inserisco scritta all'interno del mio contenuto
    stringa.append("risultato pari");

    //inserisco stringa all'interno del mio contenitore "none"
    risultatoHTML.append(stringa);

}