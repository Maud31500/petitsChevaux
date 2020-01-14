//Sortir un nombre aléatoire entre 1 et 6 et l'afficher (fonction de dé )


/*if(diceRoll === 6 || diceRoll === 1){
    pawn.classList.add('d-none');
}*/

function getDiceRoll(){
    let diceRoll = Math.floor(Math.random()*6)+1; 
    // créer un chiffre aléatoire entre 1 et 6
    return diceRoll;
}

function getDiceRollAndUpdatePawn() {
    let diceRoll = getDiceRoll();
    document.getElementById('dice').innerHTML = diceRoll; // afficher ce chiffre dans l'élément id="#dice" ;
    pawns = document.getElementsByClassName('pawn');
    return diceRoll;
}
console.log(diceRoll);
