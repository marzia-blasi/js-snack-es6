/*Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

// risultato deve essere bike678
// in #bike va stampato il risultato

// Array di bici

const stable = [
  {
    name: "bike123",
    weight: 300,
  },
  {
    name: "bike456",
    weight: 200,
  },
  {
    name: "bike678",
    weight: 150,
  },
];

// ciclo per "estrarre" il singolo oggetto dell'array
let minBike = { weight: 10000 }; //oggetto vuoto

for (let i = 0; i < stable.length; i++) {
  const singleBike = stable[i];
  // console.log(singleBike);

  //recupero del valore "weight"
  const singleBikeWeight = singleBike["weight"];

  //console.log(singleBikeWeight);

  // SE il valore peso è il più basso -> aggiungilo all'elemeno h2 in pagina

  if (singleBikeWeight < minBike["weight"]) {
    minBike = singleBike;
  }
}
console.log(minBike["name"]);

//.innerText; su h2
document.getElementById(
  "bike"
).innerText = ` La bici più leggera è ${minBike["name"]} infatti il suo peso è di ${minBike.weight}`;
