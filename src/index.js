const prompt = require("prompt-sync")()

console.log("WELCOME TO MINE MINER [by Pietro Prata]\n")
let masterName = prompt("Tell me, what's your name? ")

const qtddGolpes = prompt("From 1 to 4, what was the quantity of punches? ");
let minerals = ["Coal", "Iron", "Diamond", "Rock"];
// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= qtddGolpes; i++) {
 // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
let minaIndex = (i - 1) % minerals.length;
 console.log( i + ": " + minerals[minaIndex] );
}