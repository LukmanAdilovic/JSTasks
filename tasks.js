//dodati, izbrisati i pretraziti imena u array-u preko funkcije
let imena = [];
window.onload = function () {
    this.dodajIme("Abdu");
    console.log(imena);
    this.dodajIme("Lukman");
    console.log(imena);  
}
function dodajIme(ime) {
    imena.push(ime);
    console.log('Imena:', imena);
    return ime;
}
function obrisi(index) {
        imena.splice(index, 1);
        return imena;  
}
function pretrazi(ime) {
    for (var i = 0; i < imena.length; i++) {
        if (imena[i].includes(ime)) {
            return i;
        }
    }
    return -1;
}


// for loop koji printa svaki parni broj u arrayu
let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
b = [];
for (let i = 0; i < a.length; ++i) { 
if (i % 2 == 0) {
    b.push(a[i]);
}
}

// funkcija koja rasporedi elemente u arrayu tako da prvo dodju parni brojevi
let raspored = [5, 2, 7, 9, 2, 3, 8, 4];
raspored.sort(function(a, b) {
    return a % 2 - b % 2
});
   //drugi način
let elements = [5, 2, 7, 9, 3, 8, 4],
 even = [],
 odd = [];

 for (let i=0; i<elements.length; i++) {
     if (elements[i] % 2 == 0){
         even.push(elements[i]);
     } else {
         odd.push(elements[i]);
     }
 }
 let numbers = even.concat(odd);


 //funkcija da poreda od najveceg ka najmanjem elementu u arrayu
 let brojevi=[17, 2, 349, 50, 4, 0, 12, 27];
 brojevi.sort(function(a, b){
     return b - a
 });


 //STRING
 //zadaj bilo koji string i for loop da isprintas svaki karakter
let str = "Corona je opasna za stariju populaciju.";
  console.log (str.split(" "));

 //neki string da isprinta poziciju svih zareza (preko for loop)
 let str1 = "Također, corona, kao novi virus, se pojavio u Kini."
 strarray = [];
 for (i=0; i<str1.length; i++) {
     if (str1[i] == ",") {
         strarray.push(i);
     }
    }
    console.log(strarray);
    //drugi nacin
 console.log(str1.indexOf(","))
 console.log(str1.indexOf(",", 8))
 console.log(str1.lastIndexOf(",")) 

 //imam string i nadji gdje pocinje neka rijec i podijeli string na dva dijela do te rijeci i poslije te rijeci i isprintaj ta dva dijela
let str2 = "Ovo je neki string i njega trebam podijeliti na dva dijela.";
console.log (str2.search("njega"));
console.log (str2.substr(0, 21));
console.log (str2.substr(21, 50)); 

 //napravi funkcju koja prima jedan argument i printa taj argument (primi dva broja i treci argument koji je string i taj string je  operacijaa koja treba da se izvrsi i da odradi tu operaciju i vrati rezutat)
function neka (prviBroj, drugiBroj, operacija) {
    let rezultat; 
    if (operacija === "+") {
        rezultat = prviBroj + drugiBroj; 
    } else if(operacija === "-") {
        rezultat = prviBroj - drugiBroj; 
    } else if (operacija === "*"){
        rezultat = prviBroj * drugiBroj; 
    } else if (operacija ==="/"){
        rezultat = prviBroj / drugiBroj; 
    } 
    console.log(rezultat);
    };

    
    //unosim ime i prezime kroz funkciju i ispisuje ih, odvojeno ime odvojeno prezime
function ubacit (imePrezime){
    let ime="";
    let prezime="";
    let brojac = 0;

for (let i = 0; i<imePrezime.length; i++) {
    if(brojac === 0){
        if (imePrezime.charAt(i) != " "){
            ime = ime + imePrezime.charAt(i);
            }else {
               brojac = 2;
            }
    } else {
        prezime = prezime + imePrezime.charAt(i);
    }
}
console.log("Ime: " + ime)
console.log("Prezime: " + prezime)
}
ubacit("Lukman Adilovic");

//________________________________________________

let osoba = {};
osoba['ime'] = 'Luksić';
osoba['prezime'] = 'Visoki';
osoba['mjeseca'] = '4';
console.log('Ja sam ' + osoba['ime'] + ', a prezivam se '
 + osoba['prezime'] + '. Učim programiranje već ' + osoba['mjeseca'] + ' mjeseca.');

 //funkcija preko koje mi odvojeno ali i zajedno ispisuje ime i prezime koje unesem u parametre
function ubacit (ime, prezime){
   console.log("Ime: " + ime)
   console.log("Prezime: " + prezime) 
    console.log("Ime i Prezime: " + ime +" "+ prezime);
   }
   ubacit("lukman", "adilovic");

   
//zamjena slova
   let zamjena = "ZENIČANKA";
   console.log(zamjena.replace("Č", "K"));

 
 //da mi program izbroji samoglasnike u stringu
 let neki ='Đesi Muhammede, šta mi radiš?'
 brojač = 0;

 for(let i=0; i<neki.length; i++){
     if(neki[i]==='a' || neki[i]==='e' || neki[i]==='i' || neki[i]==='o' || neki[i]==='u' ||
      neki[i]==='A' || neki[i]==='E' || neki[i]==='I' || neki[i]==='O' || neki[i]==='U'){
          brojač++
      }
 }
 console.log('Broj samoglasnika je ' + brojač);


//konvertuje mi broj u znak po ASCII tabeli
 function unos(broj){
       if(broj > 48 && broj <= 122){
          let char = String.fromCharCode(broj);
          console.log(char);
       }else{
         console.log('Broj mora biti između 48 i 122');
       }
 };
 

//kada unesem veliko slovo program kaze da je FALSE a kada je malo onda kaze TRUE
 function znakMaloSlovo(slovo){
     return slovo === slovo.toLowerCase(); 
 };


 //digitron pomocu funkcija
function saberi (x, y){
   return x + y;
}
function oduzmi (x, y){
   return x - y;
}
function pomnoži(x, y){
   return x * y;
}
function nesto(broj1, broj2, operacija){
   var rezultat; 
   if(operacija === "+"){
       rezultat = saberi(broj1, broj2);
   }
   else if(operacija === "-"){
       rezultat = oduzmi(broj1, broj2);
   }
   else if(operacija === "*"){
       rezultat = pomnoži(broj1, broj2);
   }
console.log(rezultat);
}

//zbir elemenata u arraayu koje unesem preko funkcije
var numbers = [];
var iznos1 = 0;
function dodajBroj(broj){
   numbers.push(broj);
   console.log('Brojevi:', numbers);
}
for(i=0; i<numbers.length; i++){
   iznos1  += numbers[i]; 
}

//sabire elemente u nizu
var brojke = [3, 4, 10, 1];
var zbir = brojke.reduce(function(a, b){
   return a + b;
})
console.log(zbir);
//drugi način
var novcici = [1, 34000, 3];
var iznos = 0;
for(i=0; i<novcici.length; i++){
   iznos  += novcici[i]; 
}






