// AGE
const BIRTHDATE_CARO = new Date(1990, 0, 16);
//Mois 0 car index 0 pour janvier et index 11 pour décembre

function getAge(birthdate) {
  var diff = Date.now() - birthdate.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}
document.getElementById("ageCaro").innerHTML = getAge(BIRTHDATE_CARO) + " ans";
document.getElementById("ageCaroModal").innerHTML =
  getAge(BIRTHDATE_CARO) + " ans";

// MODALS
//Tableau des Modals
let choixModals = document.getElementsByClassName("modalClic");
for (let indexModal = 0; indexModal < choixModals.length; indexModal++) {
  choixModals[indexModal].addEventListener("click", ouvrirModal);
}

// Get the modal
let modal;
let modalID = "";

function ouvrirModal(event) {
  event.preventDefault();
  // Récupérer le nom de l'id du click pour pouvoir le mettre dans le modal et ouvrir le bon modal
  modalID = "modal" + this.id;
  modal = document.getElementById(modalID);
  modal.style.display = "block";
}

// Bouton fermer
// When the user clicks on (x), close the modal
// Ajouter événement sur croix avec classe close
let croixModals = document.getElementsByClassName("close");
for (let indexModal = 0; indexModal < croixModals.length; indexModal++) {
  croixModals[indexModal].addEventListener("click", fermerModal);
}

function fermerModal(event) {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Si clic sur Portfolio du Modal
document
  .getElementById("iconePortfolioModal")
  .addEventListener("click", function (event) {
    document.getElementById("modalDecouvrirPlus").style.display = "none";
  });

// // EFFETS TITRE
// const allItems = document.querySelectorAll('li');
// const TL1 = new TimelineMax({paused:true});
// window.addEventListener('load'){
//     TL1.from(document.getElementById('aboutMe-title'), 1, {y: -100, opacity: 0})
//     TL1.staggerFrom(allItems, 1, {y: -50, opacity: 0}, '-=1')

//     TL1.play();
// }

// FILTRES
let choixFiltres = document.getElementsByClassName("filtre-langage");
for (let indexFiltre = 0; indexFiltre < choixFiltres.length; indexFiltre++) {
  choixFiltres[indexFiltre].addEventListener("click", filtreLanguage);
}

function filtreLanguage(e) {
  const languages = document.querySelectorAll(".projetPorfolio"); //sélectionner toutes les class projetPorfolio
  let filtre = e.target.dataset.filter;
  if (filtre === "*") {
    languages.forEach((language) => language.classList.remove("hidden"));
  } else {
    languages.forEach((language) => {
      language.classList.contains(filtre) // Est-ce que le langugage se trouve dans la classe de la div
        ?
        language.classList.remove("hidden") // si oui => enlever class hidden
        :
        language.classList.add("hidden"); // si non => ajouter class hidden
    });
  }
}


// CHANGEMENT MODAL PREV/NEXT

//Tableau des Flèches
let fleches = document.getElementsByClassName("fleche");
for (let indexModal = 0; indexModal < fleches.length; indexModal++) {
  fleches[indexModal].addEventListener("click", switchModal);
}
// Récupération de tous les Modals
let modals = document.getElementsByClassName("modal");
// Dernier Modal
let lastmodalId = modals[modals.length-1].id

let idModalCourant;
let idModalSwitched;

function switchModal(event) {
  event.preventDefault();
  // récupération id flèche pour savoir si précédent ou next
  sensFleche = this.id;

  if (sensFleche == "previousArrow") {
    // récupération de l'id du modal précédent ==> this.parentElement.previousElementSibling.id
    idModalSwitched = this.parentElement.previousElementSibling.id
    // Si l'id du modal ne contient pas "modalPortfolio" alors indexOf donne -1
    if (idModalSwitched.indexOf("modalPortfolio") == -1) {
      // Si index donne -1 c'est qu'on est au premier modal et qu'il faut retourner au dernier
      idModalSwitched = lastmodalId;
    } 
  }
  else {
    // récupération de l'id du modal suivant ==> this.parentElement.nextElementSibling.id
    idModalSwitched = this.parentElement.nextElementSibling.id;
    // Si l'id du modal ne contient pas "modalPortfolio" alors indexOf donne -1
    if (idModalSwitched.indexOf("modalPortfolio") == -1) {
      // Si index donne -1 c'est qu'on est au dernier modal et qu'il faut retourner au premier
      idModalSwitched = "modalPortfolio1";
    }
  }

// Fermer Modal actuel
modal.style.display = "none";
// Ouvrir Modal Précédent
modal = document.getElementById(idModalSwitched)
modal.style.display = "block";
}


// COLLAPSE TIMELINE
var acc = document.getElementsByClassName('accordion');
var len = acc.length;
for (let i = 0; i < len; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    var box = this.parentElement;
    var icone = this.firstChild.nextElementSibling;
    console.log(icone);
    // var box = $(this).parent();
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icone.style.display="inline";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
      box.classList.add("indexTop");
      icone.style.display="none";
    }

  });

}