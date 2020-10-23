class Plat {
    constructor(name, ingredient1, ingredient2, temps) {
        this.name = name;
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.temps = temps;
    }
    preparationPlat() {
        console.log(`Votre ${this.name} est prêt ceci nous a prit ${this.temps} minutes`);
    }
}

const lasagnes = new Plat("lasagnes", "pâte", "sauce", "35");
const aligot = new Plat("aligot", "purée", "fromage", "55");

lasagnes.preparationPlat();
aligot.preparationPlat();

class Top extends Plat {
    constructor(nom, ingredient1, ingredient2, temps, dessert) {
        super(nom, ingredient1, ingredient2, temps);
        this.dessert = dessert;
    }
    ajoutDessert() {
        console.log(`Nous avons rajouté votre ${this.dessert}`);
    }
}

const viandeEtTyramissu = new Top("viande", "viande", "sauce", "10", "tyramissu"); 
const tartifletteEtTarte = new Top("tartiflette", "pomme de terre", "fromage", "45", "tarte"); 

viandeEtTyramissu.preparationPlat();
viandeEtTyramissu.ajoutDessert();
tartifletteEtTarte.preparationPlat();
tartifletteEtTarte.ajoutDessert();