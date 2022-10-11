const primerDivisor: number = 2;
const segundoDivisor: number = 3;
const cotaInferior: number = 1;
const cotaSuperior: number = 100;
let multiplos: string = "";
let resultado = <HTMLParagraphElement>document.getElementById("resultado");

let esMultiploDeDos: boolean;
let esMultiploDeTres: boolean;

for (let i = cotaInferior; i <= cotaSuperior; i++) {
  esMultiploDeDos = i % 2 === 0;
  esMultiploDeTres = i % 3 === 0;
  if (esMultiploDeDos || esMultiploDeTres) {
    multiplos += " " + i;
  }
}
console.log(" Los multiplos de 2 y 3 entre 1 y 100 son " + multiplos);
resultado.innerHTML = multiplos;
