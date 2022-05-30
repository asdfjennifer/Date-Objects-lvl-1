//lev1_1: date new Date()
console.log("%cÜbung lev 1_1: new Date()", "color: tomato");
let date1 = new Date("September 2, 2019 09:00:00")
console.log(date1);

let date2 = new Date(0);
console.log(date2);

let date3 = new Date(31556908800);
console.log(date3);

let date4 = new Date(86400000);
console.log(date4);
//=========================================================
//lev1_2: Date Methods
console.log("%cÜbung lev 1_2: Date Methods", "color: tomato");
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

//Values des heutigen Datums einzeln ausgeben lassen
let today = new Date();
// today.forEach((elt) => {
//     console.log(elt)
// })
console.log(today);
p.innerHTML = today;

//HIER NOCH UHR DESIGNEN

//=========================================================
//lev1_3: SET Date Methods
console.log("%cÜbung lev1_3: SET Date Methods", "color: tomato");

let date6 = new Date();
date6.setFullYear(2222);
date6.setMonth(9);
date6.setDate(23);
date6.setHours(13);
date6.setMinutes(25);
date6.setSeconds(11);
console.log(date6); 

let date7 = new Date();
date7.setFullYear(2123);
date7.setMonth(1); //Februar 24 funktioniert nicht -> Mar 24 in der Konsole
date7.setDate(24);
date7.setHours(13);
date7.setMinutes(25);
date7.setSeconds(11);
console.log(date7); 

let date8 = new Date();
date8.setFullYear(2123);
date8.setMonth(2);
date8.setDate(24);
date8.setHours(13);
date8.setMinutes(25);
date8.setSeconds(11);
console.log(date8); 

let date9 = new Date();
date9.setFullYear(2123);
date9.setMonth(2);
date9.setDate(03);
date9.setHours(13);
date9.setMinutes(25);
date9.setSeconds(11);
console.log(date9); 

let date10 = new Date();
// console.log(date10 + 30);
//aktuelles Datum + 5 Tage drauf
let today1 = date10.setDate(date10.getDate() + 30);
console.log(today1);

//=========================================================
//lev1_4: Tage In Monat
console.log("%cÜbung lev1_4: Tage In Monat", "color: tomato");

//Anzahl der Tage in einem bestimmten Monat
let tageImMonat = (monat, jahr) => {
    return new Date(monat, jahr, 0).getDate();
};

tageImMonat();

console.log(tageImMonat(1, 2016)); //31
console.log(tageImMonat(2, 2016)); //31
console.log(tageImMonat(2, 2017)); //31
console.log(tageImMonat(2, 2012)); //31

//=========================================================
//lev1_5: Tage In Monat
console.log("%cÜbung lev1_5: Monatsname", "color: tomato");

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];
//Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// let monatsName = (a) => {
//     if (a <= 28) {
//         return list.getMonth();
//     } else if (a = 30) {

//     } else if (a < 31) {

//     }
// };

// let monatsName = () => {
//     return list.getMonth();
// };

// console.log(monatsName("2001,3,4")); //März
// console.log(monatsName("2019,12,24")); //Dezember
// console.log(monatsName("1410,07,15")); //Juli

//=========================================================
//lev1_6: AM PM
console.log("%cÜbung lev1_6: AM PM", "color: tomato");

let time = (x) => {
    if (x < 12) {
        //getHours()
        console.log("AM");
    } else if (x > 12) {
        console.log("PM");
    }
}

time(12);

//=========================================================
//lev1_7: Weekend
console.log("%cÜbung lev1_7: Weekend", "color: tomato");

// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
// Nutze:
// Conditionals Statement.
// Comparison Operators.
// Funktion mit ein Parameter.
// Aktuelle Datum.
// getDay().
// return "Weekend".
// return "Arbeitstag".
let istWeekend = (date) => {
    //5 = Samstag, 6 = Sonntag
    if (date == 5 || date == 6) {
        date.getDay();
        return "Weekend";
    } else if (date > 5) {
        //0 - 4 = Montag - Freitag
        date.getDay();
        return "Arbeitstag";
    }
}

istWeekend(4);

console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));
