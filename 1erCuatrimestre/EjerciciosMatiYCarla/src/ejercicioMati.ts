let d = document;
let btnBase = <HTMLButtonElement>d.getElementById("btnBase");
let btnExponente = <HTMLButtonElement>d.getElementById("btnExponente");
let btnResultado = <HTMLButtonElement>d.getElementById("btnResultado");
let iBase = <HTMLInputElement>d.getElementById("iBase");
let iExponente = <HTMLInputElement>d.getElementById("iExponente");
let parrafo4 = <HTMLParagraphElement>d.getElementById("parrafo4");
let base: number;
let exponente: number;

btnBase.addEventListener("click", () => {
  base = Number(iBase.value);
});

btnExponente.addEventListener("click", () => {
  exponente = Number(iExponente.value);
});

function potencia(b: number, e: number): number {
  return Math.pow(b, e);
}

btnResultado.addEventListener("click", () => {
  //base = Number(iBase.value);
  //exponente = Number(iExponente.value);
  //---opcionales: si se quiere q se levanten los nros de los input sin tocar los 2 botones
  let resultado: number = potencia(base, exponente);
  console.log("El resultado es " + resultado);
  parrafo4.innerHTML = "El resultado es " + resultado;
});
