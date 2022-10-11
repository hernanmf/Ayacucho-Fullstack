let d = document;
let btnSuma = <HTMLButtonElement>d.getElementById("btnSuma");
let btnResta = <HTMLButtonElement>d.getElementById("btnResta");
let btnMultiplicacion = <HTMLButtonElement>(
  d.getElementById("btnMultiplicacion")
);
let btnDivision = <HTMLButtonElement>d.getElementById("btnDivision");
let btnPotencia = <HTMLButtonElement>d.getElementById("btnPotencia");
let btnC = <HTMLButtonElement>d.getElementById("btnC");
let btnNumero1 = <HTMLButtonElement>d.getElementById("btnNumero1");
let btnNumero2 = <HTMLButtonElement>d.getElementById("btnNumero2");
let iNumero1 = <HTMLInputElement>d.getElementById("iNumero1");
let iNumero2 = <HTMLInputElement>d.getElementById("iNumero2");
let pResultado = <HTMLParagraphElement>d.getElementById("pResultado");
let numero1: number = 0;
let numero2: number = 0;
let resultado: number;

btnNumero1.addEventListener("click", () => {
  numero1 = Number(iNumero1.value);
});

btnNumero2.addEventListener("click", () => {
  numero2 = Number(iNumero2.value);
});

btnC.addEventListener("click", () => {
  numero1 = 0;
  numero2 = 0;
  iNumero1.value = "";
  iNumero2.value = "";
  prompt("Se han borrado los numeros, vuelva a ingresarlos para operar");
});

btnPotencia.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
  numero1 = Number(iNumero1.value);
  numero2 = Number(iNumero2.value); */
  resultado = Math.pow(numero1, numero2);
  console.log(numero1 + " a la " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " a la " + numero2 + " = " + resultado;
  /* } else {
    console.log("Algun parametro ingresado no es valido");
    pResultado.innerHTML = "Algun parametro ingresado no es valido";
  } */
});

btnDivision.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
    numero1 = Number(iNumero1.value);
    numero2 = Number(iNumero2.value); */
  resultado = numero1 / numero2;
  console.log(numero1 + " / " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " / " + numero2 + " = " + resultado;
  /* } else {
      console.log("Algun parametro ingresado no es valido");
      pResultado.innerHTML = "Algun parametro ingresado no es valido";
    } */
});

btnMultiplicacion.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
    numero1 = Number(iNumero1.value);
    numero2 = Number(iNumero2.value); */
  resultado = numero1 * numero2;
  console.log(numero1 + " * " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " * " + numero2 + " = " + resultado;
  /* } else {
      console.log("Algun parametro ingresado no es valido");
      pResultado.innerHTML = "Algun parametro ingresado no es valido";
    } */
});

btnDivision.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
    numero1 = Number(iNumero1.value);
    numero2 = Number(iNumero2.value); */
  resultado = numero1 / numero2;
  console.log(numero1 + " / " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " / " + numero2 + " = " + resultado;
  /* } else {
      console.log("Algun parametro ingresado no es valido");
      pResultado.innerHTML = "Algun parametro ingresado no es valido";
    } */
});

btnSuma.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
    numero1 = Number(iNumero1.value);
    numero2 = Number(iNumero2.value); */
  resultado = numero1 + numero2;
  console.log(numero1 + " + " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " + " + numero2 + " = " + resultado;
  /* } else {
      console.log("Algun parametro ingresado no es valido");
      pResultado.innerHTML = "Algun parametro ingresado no es valido";
    } */
});

btnResta.addEventListener("click", () => {
  /* if (iNumero1.value != "" && iNumero2.value != ""{  
      numero1 = Number(iNumero1.value);
      numero2 = Number(iNumero2.value); */
  resultado = numero1 - numero2;
  console.log(numero1 + " - " + numero2 + " = " + resultado);
  pResultado.innerHTML = numero1 + " - " + numero2 + " = " + resultado;
  /* } else {
        console.log("Algun parametro ingresado no es valido");
        pResultado.innerHTML = "Algun parametro ingresado no es valido";
      } */
});
