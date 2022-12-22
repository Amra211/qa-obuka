//Zadatak 1.
function tvojeIme(){
    let upis = prompt('Kako se zoveš?');
    console.log('Korisnik se zove: ' + upis);
}

//Zadatak 2.
let niz = [1,2,3,4,5,6,7];

function ispisBrojeva(niz, callback){
    for (let i = 0; i < niz.length; i++){
        if(callback(niz[i])){
            console.log(niz[i]);
        }
    }
}

function jeliBrojParan(broj) {
    return broj % 2 === 0;
  }
  
function jeliBrojNeparan(broj) {
    return broj % 2 !== 0;
  }
  
function jeliBroj6(broj) {
    return broj === 6;
  }

console.log('Parni brojevi iz niza: ');
ispisBrojeva(niz, jeliBrojParan);
console.log('Broj 6 u nizu: ');
ispisBrojeva(niz, jeliBroj6);
console.log('Neparni brojevi u nizu: ');
ispisBrojeva(niz, jeliBrojNeparan);

//Zadatak 3.
let prices = ['1.00 KM', '1.95 KM', '14.50 KM', '9.40 KM'];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  // Razdvojiti svaku cijenu po razmaku tako da nam ostane dio gdje se nalazi broj
  let cijena = prices[i];
  let broj = cijena.split(' ');
  // ['1.00', 'KM']
  let prviDioBroja = broj[0];

  // dio gdje se nalazi broj će biti u obliku stringa pa pretvorit ga u float ili integer
  let floatBroj = parseFloat(prviDioBroja);

  // u varijabli sum zbrajamo cijene tako da nju mozemo povecavat s onim brojem kojeg dobijemo u svakoj iteraciji
  sum = sum + floatBroj;
}
console.log('Iznos za platiti: ' + sum);