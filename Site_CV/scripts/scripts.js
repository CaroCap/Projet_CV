// AGE
const BIRTHDATE_CARO = new Date(1990,01,16)

function getAge(birthdate){
    var diff = Date.now()-birthdate.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear()-1970);
}
document.getElementById("ageCaro").innerHTML = getAge(BIRTHDATE_CARO) + " ans";
document.getElementById("ageCaroModal").innerHTML = getAge(BIRTHDATE_CARO) + " ans";


// MODALS
//CHOIX COULEURS JOUEUR
choixCouleur = document.getElementsByClassName('couleur');
for (let indexCouleur = 0; indexCouleur < choixCouleur.length; indexCouleur++) {
    choixCouleur[indexCouleur].addEventListener("click", pickColor);
}
function pickColor(event){
    event.preventDefault();
    let colorPicked = event.currentTarget.innerText;
    for (let index = 0; index < liste_couleurs.length; index++) {
        if(document.getElementById('codeJoueur').value.length<8){
            if(colorPicked == liste_couleurs[index]){
                document.getElementById('codeJoueur').value += (liste_couleurs[index]);
            }
        }      
    }
    //replacer le curseur dans le input pour l'entrée suivante
    document.getElementById("codeJoueur").focus();
}

//TABLEAU DES MODALS
let choixModals = document.getElementsByClassName('modalClic');
for (let indexModal = 0; indexModal < choixModals.length; indexModal++) {
    choixModals[indexModal].addEventListener("click", ouvrirModal);
}
// function openModal(event) {
//     event.preventDefault();
//     let modalID = this.id;
//     for (let index = 0; index < choixModals.length; index++) {
//         if(document.getElementById('codeJoueur').value.length<8){
//             if(modalPicked == choixModals[index]){
//                 document.getElementById('codeJoueur').value += (choixModals[index]);
//             }
//         }      
//     }
// }

// Get the modal
let modal;
let modalID = "";
// ! Récupérer le nom de l'id du click pour pouvoir le mettre dans le modal et ouvrir le bon modal
// Get the button that opens the modal
// var btn = document.getElementById("decouvrirPlus");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
// btn.addEventListener("click", ouvrirModal);

function ouvrirModal(event){
    event.preventDefault();
    modalID = "modal"+this.id;
console.log("ID Modal", modalID); // ! A SUPPRIMER
    modal = document.getElementById(modalID);
console.log("Modal", modal); // ! A SUPPRIMER
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// // EFFETS TITRE
// const allItems = document.querySelectorAll('li');
// const TL1 = new TimelineMax({paused:true});
// window.addEventListener('load'){
//     TL1.from(document.getElementById('aboutMe-title'), 1, {y: -100, opacity: 0})
//     TL1.staggerFrom(allItems, 1, {y: -50, opacity: 0}, '-=1')

//     TL1.play();
// }