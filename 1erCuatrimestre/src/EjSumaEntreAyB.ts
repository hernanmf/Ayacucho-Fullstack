let resultado = <HTMLParagraphElement>document.getElementById("rResultado");
let numeroA: number = Number(prompt("Ingrese el numero A ",0)););
let numeroB: number = Number(prompt("Ingrese el numero B ",0)););
let numeroChico: number;
let numeroGrande: number;
let sumatoria: number = 0;

if (numeroA >= numeroB) {
  numeroGrande = numeroA;
  numeroChico = numeroB;
  } else {
      numeroGrande = numeroB;
      numeroChico = numeroA;
      }

while (numeroChico <=numeroGrande){
  sumatoria += numeroChico;
  numeroChico++;
}

console.log(" La suma entre " + numeroA + " y " + numeroB + " es " + sumatoria);
rResultado.innerHTML = " La suma entre " + numeroA + " y " + numeroB + " es " + sumatoria;
