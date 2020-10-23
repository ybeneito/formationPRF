/*  Fonction constructeur */
/*
function Cercle(rayon, nom) {
  this.rayon = rayon;
  this.nom = nom;
}

Cercle.prototype.pi = 3.14;
Cercle.prototype.aire = function () {
  console.log(`Aire de ${this.nom} : ${this.pi * (this.rayon * this.rayon)}`);
};
let petit_cercle = new Cercle(2, "petit_cercle");
petit_cercle.aire();
let grand_cercle = new Cercle(4, "grand_cercle");
grand_cercle.aire();
*/
/*---------------*/


/* La classe cercle permet de gérer la fonction constructor qui sera appelée à chaque instanciation 
Les propriétés directes et qui changes pour chaques instances sont alors affectées.

Ensuite, les méthodes sont directement liées au prototype de cercle (aire et getPi).  */
class Cercle {
  constructor(rayon, nom) {
    this.rayon = rayon;
    this.nom = nom;
  }
  aire() {
    console.log(
      `Aire de ${this.nom} : ${this.getPi() * this.rayon * this.rayon}`
    );
  }
  getPi() {
    return 3.14;
  }
}

let petit_cercle = new Cercle(2, "petit_cercle");
petit_cercle.aire();
let grand_cercle = new Cercle(4, "grand_cercle");
grand_cercle.aire();
