/* Creation de tableau */
const ingredients = [
  "carotte",
  "courgette",
  "blanc de poulet",
  "sauce soja",
  "oignon",
  "sel"
];
console.log(ingredients);
console.log(ingredients[1]);
console.log(ingredients.length);

/*Parcours du tableau avec forEach() */
console.log("Parcour du tableau ingredient: ");
/* Callback */ ingredients.forEach(function (elt, i, array) {
  console.log(elt, i, array);
  // console.log(i);
  //console.log(array);
});

/* Ajout d'un élément */
ingredients.push("ail");
//console.log(ingredients);

/* Retrouver la place d'un element */
const index_soja = ingredients.indexOf("sauce soja");
//console.log(index_soja);


/* méthode map */
const tiret_ingredients = ingredients.map(function(elt) {return `- ${elt}`;});
const li_ingredients = ingredients.map(elt => ` <li>${elt}<li>`);

console.log(tiret_ingredients);
console.log(li_ingredients);

/* méthode filtrer */
const ingredients_courts = ingredients.filter(elt => elt.length <5);
console.log(ingredients_courts);

const persons = [
    {name: "Toto",age:25},
    {name: "Tata",age:30},
    {name: "titi",age:52},
    {name: "Raoul",age:2}
];

const mineurs = persons.filter(elm => elm.age < 18);
console.log(mineurs);