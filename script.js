console.log("---Oppgave2---") //oppgave 2
console.log("1.", 8+"4");
console.log("2.", 8*"4");
console.log("3.", 8/"4");
console.log("4.", 8-"4");


console.log("---Oppgave3---") //oppgave 3
let a = 3;
let b = 7;

console.log("1.", a*b)
console.log("2.", a*(b-1))
console.log("3.", (a-1)*b)
console.log("4.", a*(b+1))
console.log("5.", a-b)

console.log("---Oppgave4---") //oppgave 4

let timer = 4;
let minutter = 27;
let sekunder = 33;

console.log(timer*3600+minutter*60+sekunder, "sekunder i", timer,"timer", minutter,"minutter og", sekunder,"sekunder")

console.log("---Oppgave5---") //oppgave 5

let SEKUNDER = 5790
let MINUTTER = SEKUNDER/60
let TIMER = MINUTTER/60

console.log("sekunder =", SEKUNDER, "minutter =", MINUTTER, "timer =", TIMER)

console.log("---Oppgave6---") //oppgave 6

let alfabet = "abcdefghijklmnopqrstvuwxyzøæå";
console.log(alfabet.charAt(7), alfabet.charAt(0), alfabet.charAt(11), alfabet.charAt(11), alfabet.charAt(14))

console.log("---Oppgave7---") //oppgave 7

if(67 >= 31){
    console.log("67 er størst")
}

console.log("---Oppgave8---") //oppgave 8

for(let i = 0; i <= 10; i++) {
    if(i == 10){
        console.log("Ferdig")
    }   
    else{
    console.log(i)
    }
}

console.log("---Oppgave9---") //oppgave 9

function tilfeldighilsen(max){
    let hilsen = Math.floor(Math.random()* max)
    if(hilsen == 3){
        console.log("hei")
    }
    else if(hilsen == 2){
        console.log("Hallo")
    }
    else if(hilsen == 1){
        console.log("God dag")
    }
}
tilfeldighilsen(4)

console.log("---Oppgave10---") //oppgave 10

function tilfeldignummer(){
    let terning1 = Math.floor(Math.random()* 6) +1;
    let terning2 = Math.floor(Math.random()* 6) +1;
    console.log("Du rullet " + terning1 + " i terning 1");
    console.log("Du rullet " + terning2 + " i terning 2");

    if (terning1 == terning2) {
        console.log("Du rullet et parr!")
    }
}
tilfeldignummer()

console.log("---Oppgave11---") //oppgave 11

function katteting(mengde){
    for( let i = mengde; i > 0; i--)
    console.log("=^.^=");
}

katteting(67)

console.log("---Oppgave12---") //oppgave 12

function navneskilt(navn){
    let output = "";
    for (let i = 0; i < navn.length + 4; i++) {
        output += "*";
    }
    console.log(output + "\n" + "* " + navn + " *" + "\n" + output);
}
navneskilt("Lisa")

console.log("---Oppgave13---") //oppgave 13

let primtall = [1,2];

function blimrall(){
    for (let i = 3; i < 100; i++){
        let erPrim = true;
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
               erPrim = false;
            }
        }
        if (erPrim) {
            primtall.push(i)
        }
    
    }
    console.log(primtall);
    

}

blimrall()

console.log("---Oppgave14---") //oppgave 14

array = [];
let minste 
let storste

function hellay(mengde){
    for (let i = 0; i < mengde; i++) {
        let nummer = Math.floor(Math.random()*mengde) + 1;
        array.push(nummer);
    }
    console.log(array);
    array.sort((a, b) => b - a);
    minste = Math.min(...array);
    storste = Math.max(...array);
    console.log(minste, storste);
}

hellay(50)

console.log("---Oppgave15---") //oppgave 15

let array2 = []

function arbie(tall){
for (let index = 0; index < tall; index++) {
    array2.push(index)
    if (index%2!==0){
        array2.pop(index)
    }
}
console.log(array2)
}

arbie(100)

console.log("---Oppgave16---") //oppgave 16

let array3 = [];

for (let index = 0; index < 100; index++) {
    array3.push(index)
}

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const original = array3;
const reversed = reverseArray(original);
console.log(reversed);

console.log("---Oppgave17---") //oppgave 17


function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

let array4 = []

function barbie(tall){
for (let index = 0; index < tall; index++) {
    let nummer = Math.floor(Math.random()*tall) + 1;
    while (array4.includes(nummer)) {
        nummer = Math.floor(Math.random()*tall) + 1;
    }
    array4.push(nummer);
}
console.log(array4)
}

barbie(500)
console.log(hasDuplicates(array4))

console.log("---Oppgave18---") //oppgave 18

let array5 = []

function lagarray(tall){
    for (let index = 0; index < tall; index++) {
    let nummer = Math.floor(Math.random()*tall) + 1;
    array5.push(nummer);
}
console.log(array5)
}

function fjernfraarray(tall){
    array5.splice(0, tall)
}

lagarray(670)
fjernfraarray(400)


console.log("---Oppgave19---") //oppgave 19

const spiller1Kort = []
const spiller2Kort = []
const kortTyper = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13]

let MengeKort = 52
let spillStart = false
let p1 = true

function TrekkKort(mengde){
    for (let kort = 0; kort < mengde; kort++) {
        let nesteKort = kortTyper[Math.floor(Math.random() * kortTyper.length)]
        if (p1){
            spiller1Kort.push(nesteKort);
            console.log("spiller1 fikk kortet ", nesteKort);
            p1 = false;
        } 
        else if (p1 == false){
            spiller2Kort.push(nesteKort);
            console.log("spiller2 fikk kortet ", nesteKort);
            p1 = true;
        }
    }
    console.log(spiller1Kort)
    console.log(spiller2Kort)
}

function SpillKort(){
    let kort1 = spiller1Kort[Math.floor(Math.random() * spiller1Kort.length)]
    let kort2 = spiller2Kort[Math.floor(Math.random() * spiller2Kort.length)]
}

TrekkKort(MengeKort)