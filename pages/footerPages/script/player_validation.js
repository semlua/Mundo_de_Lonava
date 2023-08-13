var codeInput = window.document.getElementById('passwordInput'); 
const homePage = window.document.getElementById('homeButton')

/* Function that validates the players and what campaing they are playing*/
function playerValidate() {
    if (codeInput.value  == "belatona") {
        window.location.href = "../footerPages/playerVerified/player_belatona.html"
    }
    else if (codeInput.value == "linhagem") {
        window.location.href = "../footerPages/playerVerified/player_linhagem.html"
    }
    else {
       window.alert('Deu ruim, arruma isso aí')
    }
}
/* Function that lead the user to the main page, by clicking the return button */ 
function backHome() {
    window.location.href = "../index.html"
}