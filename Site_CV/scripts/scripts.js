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

//Tableau des Modals
let choixModals = document.getElementsByClassName('modalClic');
for (let indexModal = 0; indexModal < choixModals.length; indexModal++) {
    choixModals[indexModal].addEventListener("click", ouvrirModal);
}

// Get the modal
let modal;
let modalID = "";

function ouvrirModal(event){
    event.preventDefault();
    // Récupérer le nom de l'id du click pour pouvoir le mettre dans le modal et ouvrir le bon modal
    modalID = "modal"+this.id;
    modal = document.getElementById(modalID);
    modal.style.display = "block";
}

// Bouton fermer
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let croixModals = document.getElementsByClassName('close');
for (let indexModal = 0; indexModal < croixModals.length; indexModal++) {
    croixModals[indexModal].addEventListener("click", fermerModal);
}
// When the user clicks on <span> (x), close the modal
// ! prob avec le nombre du [] close
function fermerModal(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function() {
    modalID = "modal"+this.id;
    modal = document.getElementById(modalID);
    modal.style.display = "none";
}
span.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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


// FILTRES
let choixFiltres = document.getElementsByClassName('filtre-langage');
for (let indexFiltre = 0; indexFiltre < choixFiltres.length; indexFiltre++) {
    choixFiltres[indexFiltre].addEventListener("click", filtreLanguage);
}

function filtreLanguage(e) {
    const languages = document.querySelectorAll(".projetPorfolio"); //sélectionner toutes les class projetPorfolio
    let filtre = e.target.dataset.filter;
    if (filtre === '*') {
        languages.forEach(language => language.classList.remove('hidden'));
    }
    else {
            languages.forEach(language => {
            language.classList.contains(filtre) // Est-ce que le langugage se trouve dans la classe de la div
            ? language.classList.remove('hidden') // si oui => enlever class hidden
            : language.classList.add('hidden') // si non => ajouter class hidden
        });
    };
};