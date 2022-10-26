let element = document.getElementById("title");
let elementText = element.innerText;
console.log(elementText);

// element.innerText = "Abrikosas"; // daro ta pati
document.getElementById("title").innerText = "Abrikosas";

document.getElementById("container").innerHTML = "<h1>yo yo yo</h1>";


console.log(document.getElementById("container").innerHTML);


let word = "Sviesa";
let words = ["Sviesa", "Stalas", "Lemuras", "Igoris", "silke"];
console.log(words);

console.log(words[2]);

words[4] = "krumas";

console.log(words);

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);
console.log("-------------------");

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
console.log("-------------------");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
}
console.log("-------------------");


for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}
console.log("-------------------");

console.log("o cia jau po ciklo");


for (let i = 7; i < 10; i++) {
    for (let a = 0; a < 3; a++) {
        console.log("i = " + i + ", a = " + a);
    }
}

let numbers = [58, 4, 46, 46, 68, 45, 3, 3, 20, 13, 68, 68, 31, 864];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// for (let i = 1; i <= 10; i++) {
//     let line = "";
//     for (let a = 1; a <= 10; a++) {
//         line += i * a + " ";
//     }
//     console.log(line);
// }

// let i = 0;
// for (; true ;) {
//     i++;
//     console.log(i);
//     if(i >= 5){
//         break;
//     }
// }
// console.log("-----while--------");

// i = 0;
// while (true) {
//     i++;
//     console.log(i);
//     if(i >= 5){
//         break;
//     } 
// }

// let shouldGo = true;
// while (shouldGo) {
//     i++;
//     console.log(i);
//     if(i >= 5){
//         shouldGo = false;
//     } 
// }


do {
    console.log("Darom!");
} while (false);
console.log("A reikejo? :)");


for (let i = 50; i < 100; i+=7) {
    console.log(i);
}




//  ["Sviesa", "Stalas", "Lemuras", "Igoris", "silke"];

for (let i = words.length -1; i >= 0; i--) {
    console.log(words[i]);
    
}

let arr2d = [ ["Sviesa", "Stalas","silke"], ["Lemuras","Lomzirgis"], ["Igoris","Iguana"] ];

for (let i = 0; i < arr2d.length; i++) {
    for (let a = 0; a < arr2d[i].length; a++) {
       console.log(arr2d[i][a]);
    }
}