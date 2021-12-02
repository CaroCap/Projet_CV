// MODALS
// Get the modal
var modal = document.getElementById("modalDecouvrirPlus");
// ! Récupérer le nom de l'id du click pour pouvoir le mettre dans le modal et ouvrir le bon modal

// Get the button that opens the modal
var btn = document.getElementById("decouvrirPlus");

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