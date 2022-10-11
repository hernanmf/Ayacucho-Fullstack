let d = document;
let btnComenzar = <HTMLButtonElement>d.getElementById("btnComenzar");
let btnTamanio = <HTMLButtonElement>d.getElementById("btnTamanio");
let pMenor = <HTMLParagraphElement>d.getElementById("pMenor");
let pMayor = <HTMLParagraphElement>d.getElementById("pMayor");
let pMedia = <HTMLParagraphElement>d.getElementById("pMedia");
let longitudArray: number = 0;
let esNumero = new RegExp("^[0-9]*$");

function completarArreglos(largoArray: number): number[] {
  let a1: number[] = new Array(largoArray);
  for (let i = 0; i < largoArray; i++) {
    a1[i] = Number(
      prompt("Elemento numero: " + (i + 1) + " de " + largoArray, 0)
    );
    while (!esNumero.test(a1[i])) {
      alert("Los valores deben ser numeros, a continuacion podra reingresarlo");
      a1[i] = Number(
        prompt("Elemento numero: " + (i + 1) + " de " + largoArray, 0)
      );
    }
  }
  return a1;
}
function calculaPromedioDeArray(arr: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

btnTamanio.addEventListener("click", () => {
  longitudArray = Number(
    prompt("Ingrese el tamaño del vector de numeros (al menos 1 elemento)", 1)
  );
  while (longitudArray <= 0 || !esNumero.test(longitudArray)) {
    longitudArray = Number(
      prompt(
        "Ingrese un tamaño de vector que sea valido por favor, recuerde que debe ser de al menos 1 elemento ",
        1
      )
    );
  }
});

btnComenzar.addEventListener("click", () => {
  while (longitudArray <= 0 || !esNumero.test(longitudArray)) {
    longitudArray = Number(
      prompt(
        "Ingrese un tamaño de vector que sea valido por favor, recuerde que debe ser de al menos 1 elemento ",
        1
      )
    );
  }
  let arreglo: number[] = completarArreglos(longitudArray);
  alert("A continuacion, los resultados:");
  pMenor.innerHTML = "Numero menor: " + Math.min(...arreglo);
  pMayor.innerHTML = "Numero mayor: " + Math.max(...arreglo);
  pMedia.innerHTML =
    "Media de los elementos: " + calculaPromedioDeArray(arreglo);
});
