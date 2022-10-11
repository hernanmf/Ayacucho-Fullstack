let d = document;
let btnCalcular = <HTMLButtonElement>d.getElementById("btnCalcular");
let btnCargar = <HTMLButtonElement>d.getElementById("btnCargar");
let iLargo = <HTMLInputElement>d.getElementById("iLargo");
let tamanio: number = Number(iLargo.value);

let array1: number[] = new Array(tamanio);
let array2: number[] = new Array(tamanio);
//let arrayResultado: number[] = new Array(tamanio);

function cargarArreglo(arreglo: number[], t: number) {
  alert("Vamos a cargar los arreglos");
  for (let i = 0; i < t - 1; i++) {
    arreglo[i] = Number(prompt("Ingrese el valor del Indice " + i + ": ", 0));
  }
}

function calcularProductoArrays(
  arregloA: number[],
  arregloB: number[],
  t: number
): number[] {
  let arrRes: number[] = new Array(tamanio);
  for (let i = 0; i <= t - 1; i++) {
    arrRes[i] = arregloA[i] * arregloB[i];
  }
  return arrRes;
}

btnCargar.addEventListener("click", () => {
  cargarArreglo(array1, tamanio);
  cargarArreglo(array2, tamanio);
});

btnCalcular.addEventListener("click", () => {
  let arrayResultado = calcularProductoArrays(array1, array2, tamanio);
  for (let i = 0; i <= tamanio - 1; i++) {
    console.log(arrayResultado[i]);
  }
});
