
//fonction annonyme immédiate ou IIFES
let getI = (function() {
    var i = 12;
    //console.log(i);
    function getI() {
        return i;
    }
    return getI;
})();