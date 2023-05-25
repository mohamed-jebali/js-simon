// @qui
// Ciao ragazze e ciao ragazzi!
// Esercizio di oggi: :orologio1: Boom Countdown :collisione:
// nome repo: js-simon
// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?
// Buon divertimento a tutte e a tutti!


// Un giorno è composto da 24 ore. /// 86400000
// Un'ora è composta da 60 minuti. /// 3600000
// Un minuto è composto da 60 secondi. /// 6000
// Un secondo è composto da 1000 millisecondi. /// 1000




// prendo il tempo attuale
// prendo il giorno
// prendo il l'ora
// prendo i minuti
// prendo i secondi



let currentDate = new Date();

currentDate.getDate();

currentDate.getHours();

currentDate.getMinutes();

currentDate.getSeconds();


// prendo il giorno del countdown quindi domani
// prendo l'ora del countdown alle 9
// prendo i minuti del countdown alle 9:30
// prendo i secondi del countdown alle 9:30:00

let countdown = new Date();

countdown.getDate(currentDate.getDate() + 1);

countdown.getHours(9);

countdown.getMinutes(30);

countdown.getSeconds(0);

// creo una funzione che trova la differenza tra currentDate countdown

function timeLeft (){
    let differenceTime = countdown.getTime() - currentDate.getTime();
}
