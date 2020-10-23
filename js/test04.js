/*Fonction qui attends 2 paramètres et qui les additionne
 * @param {number} i 
 * @param {number} j
 * àreturn {number}
*/

function ajoute(i, j) {
    console.log("i : ",i); // Les variables sont "fonction scope" la valeur n'existe que dans la fonction.
    return i + j;
}
console.log(ajoute(1,3)); // appel de la fonction "ajoute" avec les arguments 1 et 3

