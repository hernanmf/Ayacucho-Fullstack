let d = document;
let btnConcatenar = <HTMLButtonElement>d.getElementById("btnConcatenar");
let pArregloResultado = <HTMLParagraphElement>(
  d.getElementById("pArregloResultado")
);
let arregloA: string[] = Array();
let arregloB: string[] = Array();

function completarArreglos(largoArray: number) {
  alert("Completaremos el 1er arreglo de " + largoArray + " elementos");
  for (let i = 0; i < largoArray; i++) {
    arregloA[i] = Number(prompt("Arreglo 1, elemento numero: " + (i + 1), 0));
  }
  alert("Ahora 2do arreglo");
  for (let i = 0; i < largoArray; i++) {
    arregloB[i] = Number(prompt("Arreglo 2, elemento numero: " + (i + 1), 0));
  }
  alert("A continuacion, los resultados");
}

function concatenaArrays(a1: string[], a2: string[], l: number): string[] {
  let arr: string[] = new Array();
  let j: number = 0;
  for (let i = 0; i < l; i++) {
    arr[j] = a1[i];
    j++;
    arr[j] = a2[i];
    j++;
  }
  return arr;
}

btnConcatenar.addEventListener("click", () => {
  let esNumero = new RegExp("^[0-9]*$");
  let longitudArray: number = prompt("Ingrese el tamaño de los arreglos", 0);
  while (!esNumero.test(longitudArray)) {
    longitudArray = Number(
      prompt("Ingrese un tamaño de vector que sea valido por favor", 0)
    );
  }
  completarArreglos(longitudArray);
  let arregloResultado: number[] = concatenaArrays(
    arregloA,
    arregloB,
    longitudArray
  );
  pArregloResultado.innerHTML = "Arreglo final: [ " + arregloResultado + " ]";
});
