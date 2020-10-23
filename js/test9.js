var i = 12;


console.log(i);
console.log(window.i);
console.log(this.i);
console.log(window);
//alert("Hello World");
console.log(navigator.appCodeName);
console.log(this);

function lingotOr() {
    this.valeur = 87654;
    console.log('this', this);   
}
lingotOr.prototype.poids = "1kg";
l = new lingotOr();
l3 = new lingotOr();
console.log(l); 
console.log(l3); 

// Syntaxe des objets littéraux ou JSON 

let l2 = {
    valeur: 78000
}
Object.prototype.poids = "1kg";
console.log(l2);
console.log(l2.hasOwnProperty("valeur"));