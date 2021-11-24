// AGE
const BIRTHDATE_CARO = new Date(1990,01,16)

function getAge(birthdate){
    var diff = Date.now()-birthdate.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear()-1970);
}
document.getElementById("ageCaro").innerHTML = getAge(BIRTHDATE_CARO) + " ans";
document.getElementById("ageCaroModal").innerHTML = getAge(BIRTHDATE_CARO) + " ans";

// CAROUSEL
function moveToSelected(element) {

    if (element == "next") {
    var selected = $(".selected").next();
    } else if (element == "prev") {
    var selected = $(".selected").prev();
    } else {
    var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});


// MODALS
// Get the modal
var modal = document.getElementById("decouvrirPlus");
// ! Récupérer le nom de l'id du click pour pouvoir le mettre dans le modal et ouvrir le bon modal

// Get the button that opens the modal
var btn = document.getElementById("modalDecouvrirPlus");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", ouvrirModal);
function ouvrirModal(event){
    event.preventDefault();
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