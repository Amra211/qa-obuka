//Zadatak 1.
console.log("Zadatak 1.");
for (let i = 1; i <= 10; i++) 
{
    if(i % 2 != 0)
        console.log(i);
}

//Zadatak 2.
console.log("Zadatak 2.");
let paragraph = document.getElementById("mojParagraf").innerText.length;
console.log("Broj karaktera u paragrafu je: " + paragraph);

//Zadatak 3.
console.log("Zadatak 3.");
function kalkulator (prviBroj, drugiBroj, operator) 
{
    if(prviBroj && drugiBroj){
        switch(operator){
            case '+': console.log(prviBroj + drugiBroj); break;
            case '-': console.log(prviBroj - drugiBroj); break;
            case '*': console.log(prviBroj * drugiBroj); break;
            case '/': console.log(prviBroj / drugiBroj); break;
            default : console.log('null'); break;
        }
    }
}
kalkulator(1,2,'+')
kalkulator(1,2,'-')
kalkulator(1,2,'*')
kalkulator(1,2,'/')
kalkulator(1,2,'?')

//Zadatak 4.
console.log("Zadatak 4.");
function vratiStatus(niz, trazeniElement)
{
    console.log(niz.includes(trazeniElement));
}

vratiStatus([5,10,15,20,25], 15);
vratiStatus([5,10,15,20,25], 1);

//Zadatak 5.
console.log("Zadatak 5.");
function vratiObjekat(keys, values)
{
    if(keys.length != values.length)
    {
        console.log("empty");
    }
    else
    {
        for(let i = 0; i < keys.length; i++){
            console.log(keys[i] + values[i]);
        }
    }
}

vratiObjekat(['ime: ', 'prezime: ', 'godine: '], ['Amra', 'Šijak']);
vratiObjekat(['ime: ', 'prezime: ', 'godine: '], ['Amra', 'Šijak', 24]);