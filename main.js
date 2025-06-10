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

/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// array dove è compilato solo il nome

// generare numeri random per 2 proprietà
// math random
// aggiungere i valori
// championsSq.punti = numerorandom
// championsSq.falli = numerorandom

// creare un arrary che contenga solo nomi e falli subiti
// stamparlo in console

const championsSq = [
  // 0 - championsSq[0]
  {
    nome: "napoli",
    punti: 0,
    falli: 0,
  },
  //1 - championsSq[1]
  {
    nome: "bologna",
    punti: 0,
    falli: 0,
  },
  // 2 - .nome , .punti, .falli
  {
    nome: "roma",
    punti: 0,
    falli: 0,
  },
  // 3
  {
    nome: "milano",
    punti: 0,
    falli: 0,
  },
];

//const puntiRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

//const falliRandom = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

// console.log(puntiRandom, falliRandom);

championsSq.punti = 34;

console.log(championsSq);

for (const i in championsSq) {
  console.log(i, championsSq[i], championsSq[i].nome);
  championsSq[i].punti = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

for (const champion of championsSq) {
  console.log(champion, champion.nome);
  champion.falli = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
}

console.log(championsSq);

const nuoveSquadre = [];

for (const squadra of championsSq) {
  nuoveSquadre.push({
    newName: squadra.nome,
    newPunti: squadra.falli,
  });
}

console.log(nuoveSquadre);
