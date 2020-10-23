function creerFonction() {
    var nom = "Mozilla";
    function afficheNom() {
      console.log(nom);
    }
    return afficheNom;
  }
  
  let maFonction = creerFonction();// à ne pas confondre avec let maFonction = creerFonction;
  maFonction();

  //context afficheNom() : ----
  //context creerFonction() : nom et afficheNom()
  //context global : creerFonction() et maFonction
  