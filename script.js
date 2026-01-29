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

console.log("---Oppgave12---") //oppgave 11

function navneskilt(navn){
    console.log("****** \n" + "*" + navn + "*" + "\n******")
}
navneskilt("Lise")

