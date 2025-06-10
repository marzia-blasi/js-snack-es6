/*Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

// risultato deve essere bike678
// in #bike va stampato il risultato

const stable = [
  {
    name: "bike123",
    weight: "300",
  },
  {
    name: "bike456",
    weight: "200",
  },
  {
    name: "bike678",
    weight: "150",
  },
];

for (let i = 0; i < stable.length; i++) {
  const singleBike = stable[i];
  console.log(singleBike);

  const singleBikeWeight = singleBike["weight"];

  console.log(singleBikeWeight);
}

/*Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
