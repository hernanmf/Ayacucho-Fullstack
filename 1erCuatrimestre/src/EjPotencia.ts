let d = document;
let btnPotencia = <HTMLButtonElement>d.getElementById("btnPotencia");
let iBase = <HTMLInputElement>d.getElementById("iBase");
let iExponente = <HTMLInputElement>d.getElementById("iExponente");
let resultadoPotencia = <HTMLParagraphElement>(
  d.getElementById("resultadoPotencia")
);

function calculaPotencia(b: number, e: number): number {
  let resultado: number = 1;
  if (e == 0) {
    resultado = 1;
  } else {
    for (let i = 1; i <= e; i++) {
      resultado = resultado * b;
    }
  }
  return resultado;
}

btnPotencia.addEventListener("click", () => {
  let resultado: number = 0;
  let base = Number(iBase.value);
  let exponente = Number(iExponente.value);
  if (exponente < 0) {
    console.log("El exponente no puede ser menor a 0");
    resultadoPotencia.innerHTML = "El exponente no puede ser menor a 0";
  } else {
    resultado = calculaPotencia(base, exponente);
    console.log("El resultado es " + resultado);
    resultadoPotencia.innerHTML = "El resultado es " + resultado;
  }
});
