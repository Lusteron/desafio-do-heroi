const nomeDoHeroi = "Luiz";
let nivel = 7001;

if (nivel < 1000) {
  var ranking = "Ferro";
} else if (nivel >= 1001 && nivel < 2000) {
  var ranking = "Bronze";
} else if (nivel >= 2001 && nivel < 5000) {
  var ranking = "Prata";
} else if (nivel >= 5001 && nivel < 7000) {
  var ranking = "Ouro";
} else if (nivel >= 7001 && nivel < 8000) {
  var ranking = "Platina";
} else if (nivel >= 8001 && nivel < 9000) {
  var ranking = "Ascendente";
} else if (nivel >= 9001 && nivel < 10000) {
  var ranking = "Imortal";
} else if (nivel >= 10001) {
  var ranking = "Radiante";
}
console.log(
  "O herói " + nomeDoHeroi + " tem classicação de ranking de: " + ranking
);
