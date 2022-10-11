let d = document;
let btnRecursivo = <HTMLButtonElement>d.getElementById("btnRecursivo");
let btnSecuencial = <HTMLButtonElement>d.getElementById("btnSecuencial");
let arreglo: number[] = [6, 4, 9, 7, 1, 4, 1, 2];

let arregloInvertido: number[] = [];
let arregloInvertidoRecursivo: number[] = [];

const invertirArregloRecursivo = (arr: number[], posicion: number) => {
  if (posicion === arr.length - 1) {
    arregloInvertidoRecursivo.push(arr[posicion]);
  } else {
    invertirArregloRecursivo(arr, posicion + 1);
    arregloInvertidoRecursivo.push(arr[posicion]);
  }
};

btnRecursivo.addEventListener("click", () => {
  invertirArregloRecursivo(arreglo, 0);
  console.log(arregloInvertidoRecursivo);
});

function invertirArregloSecuencial(arreglo: number[]) {
  for (let i = arreglo.length - 1; i >= 0; i--) {
    arregloInvertido.push(arreglo[i]);
  }

  /* arreglo.forEach((value, index) => {
    console.log({ index, value });
  }); */

  for (const element of arreglo) {
    console.log({ element });
  }
  arreglo.find();
  //arregloInvertido = arreglo.reverse();
}

function invertirCadena(texto: string[]): string[] {
  /* let cadenaR: string[] = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    cadenaR += texto[i];
  }
  return cadenaR; */
  return texto.split("").reverse().join("");
}

btnSecuencial.addEventListener("click", () => {
  invertirArregloSecuencial(arreglo);
  console.log(arregloInvertido);
  console.log(invertirCadena(cadena));
});
