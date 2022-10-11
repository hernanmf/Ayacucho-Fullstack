let d = document;
let btnDivisores = <HTMLButtonElement>d.getElementById("btnDivisores");
let iNumero = <HTMLInputElement>d.getElementById("iNumero");
let resultadoDivisores = <HTMLParagraphElement>(
  d.getElementById("resultadoDivisores")
);

btnDivisores.addEventListener("click", () => {
let resultado: number = 0;
let numero: number = Number(iNumero.value);
if (iNumero.value != "" && numero > 0) {
  for (let i = 1; i <= numero; i++) {
    if (numero%i === 0) {
      resultado ++;
    }
  }
  console.log(numero+" tiene "+ resultado+ " divisores");
  resultadoDivisores.innerHTML = numero+" tiene "+ resultado+ " divisores";

  } else {
    console.log("El numero debe ser mayor que cero");
    resultadoDivisores.innerHTML = "El numero debe ser mayor que cero";
  }
}