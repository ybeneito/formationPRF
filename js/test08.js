/* Création d'une fonction constructeur d'objets "Card" */
function Card(question, answer, explanation) {
    /*Creation et affecation des propriétés*/
    this.question = question
    this.answer = answer
    this.explanation = explanation
    

    //Méthodes
    this.moveRight = function() {
        //code pour déplacer la carte
        console.log("Quand je serai grand je creerai un fonctions qui déplacera la carte vers la droite.")
    }

    this.moveLeft = function() {
        //code pour déplacer la carte
        console.log("Quand je serai grand je creerai un fonctions qui déplacera la carte vers la gauche.")
    }
    this.afficherCarteComplete = function() {
        console.log("Question = " + this.question);
        console.log("Réponse = " + this.answer);
        console.log("Explication = " + this.explanation);
    }
}

// Instance créée avec des arguments
let tbl = new Card("Inventeur du Web?", "Tim Burners-Lee", "Anglais qui travaillait au CERN.");
// Invoquation de la méthode afficherCarteComplete
tbl.afficherCarteComplete(); 

// Invoc de la mèthode "moveright"
tbl.moveRight();