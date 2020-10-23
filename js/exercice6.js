class Recette {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients; 
        
        const AddIngredient = ingredients.push();
        const RemoveIngredient = ingredients.splice();
        
    
    }
    timer() {
        console.log('Un jour je ferai un truc qui dira quoi faire dans le bon ordre');
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
    removeIngredient(ingredient) {
        const ingredient_index = this.ingredients.indexOf(ingredient);
        if (ingredient_index != -1) {
        this.ingredients.splice(ingredient_index, 1);
        }
    }
        
}

const poulet_curry = new Recette("Poulet Curry", ["poulet", "pâtes au curry"]);
console.log(poulet_curry);
poulet_curry.addIngredient("lait de coco");
console.log(poulet_curry);
poulet_curry.removeIngredient("poulet");
console.log(poulet_curry);