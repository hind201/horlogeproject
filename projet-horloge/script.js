
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
 
//Ajouter l'heure , minite , seconde  dans des varaiables
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde

// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
// Déplacer les aiguilles 
function  demarrerLaMontre(){
    var actdate = new Date();
    var hour = actdate.getHours() % 12;
    var minute = actdate.getMinutes();
    var second = actdate.getSeconds();

    var hourDeg = (hour * 30 )+ (0.5 * minute);
     var minuteDeg = (minute * 6) + ( 0.1 * second);
     var secondeDeg = second * 6;
// Séléctionner les aiguilles de montre
     AIGUILLEHR.style.transform = 'rotate(' + hourDeg +'deg)';
     AIGUILLEMIN.style.transform = 'rotate(' + minuteDeg +'deg)';
     AIGUILLESEC.style.transform = 'rotate(' + secondeDeg + 'deg)';
// Exercuter la fonction chaque secondo
     var interval = setInterval(demarrerLaMontre, 1000);};
demarrerLaMontre();






