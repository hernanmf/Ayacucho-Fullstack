let d = document;
let btnResultados = <HTMLButtonElement>d.getElementById("btnResultados");
let iNumero1 = <HTMLInputElement>d.getElementById("iNumero1");
let iNumero2 = <HTMLInputElement>d.getElementById("iNumero2");
let iNumero3 = <HTMLInputElement>d.getElementById("iNumero3");
let pMenor = <HTMLParagraphElement>d.getElementById("pMenor");
let pMayor = <HTMLParagraphElement>d.getElementById("pMayor");
let esNumero = new RegExp("^-?[0-9]*$");

btnResultados.addEventListener("click", () => {
  let n1: number = Number(iNumero1.value);
  let n2: number = Number(iNumero2.value);
  let n3: number = Number(iNumero3.value);

  if (!esNumero.test(n1) || !esNumero.test(n2) || !esNumero.test(n3)) {
    alert(
      "Por favor verifique los numeros, alguno/s puede que no sean validos"
    );
  } else {
    pMenor.innerHTML = "Numero menor: " + Math.min(n1, n2, n3);
    pMayor.innerHTML = "Numero mayor: " + Math.max(n1, n2, n3);
  }
});
