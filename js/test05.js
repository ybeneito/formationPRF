let i = 1;
function a() {
  let j = 2;
  b();
  function b(){
    {
      let k = 3;
    }
    let l = 4;
    console.log(l);
    console.log(k);
  }
}
a();

// contexte {} : k
// contexte b() : l
// contexte a() : j et b() 
// contexte global : i et a()


