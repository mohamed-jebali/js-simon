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








let currentDate = new Date();

let currentHour = currentDate.getHours();

let currentMinutes = currentDate.getMinutes();

let currentSeconds = currentDate.getSeconds();

console.log(currentDate.getSeconds());


// console.log(moonLanding.getFullYear());