var codeInput = window.document.getElementById('passwordInput'); 
const homePage = window.document.getElementById('homeButton')


/* validates if the player is in Contos de Belatona Campaign*/
function playerBelatona() {
    window.location.href = "../footerPages/playerVerified/player_belatona.html"
}

/* validates if the player is in Linhagem Ancestral Campaign */
function playerLinhagem(){
    window.location.href = "../pages/footerPages/playerVerified/player_linhagem.html"
}
/* Function that validates the players and what campaing they are playing*/
function playerValidate() {
    if (codeInput.value  == "Belatona") {
       playerBelatona();
    }
    else if (codeInput.value == "linhagem") {
       playerLinhagem();
    }
    
}

/* Function that lead the user to the main page, by clicking the return button */ 
function backHome() {
    window.location.href = "../index.html"
}

/* Switch condition that indicates the page to the player*/
switch (codeInput) {
    case "Belatona":
        playerValidate();
        break;

    default:

        break;
}