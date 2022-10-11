let d = document;
let btnComenzar = <HTMLButtonElement>d.getElementById("btnComenzar");
let pArregloResultado = <HTMLParagraphElement>(
  d.getElementById("pArregloResultado")
);

function completarArreglos(largoArray: number): number[] {
  let a1: number[] = new Array(largoArray);
  let a2: number[] = new Array(largoArray);
  let a3: number[] = new Array(largoArray);
  let a4: number[] = new Array(largoArray);

  for (let i = 0; i < largoArray; i++) {
    a1[i] = Number(prompt("1er arreglo, elemento numero: " + (i + 1), 0));
  }
  alert("Ahora 2do arreglo");
  for (let i = 0; i < largoArray; i++) {
    a2[i] = Number(prompt("2do arreglo, elemento numero: " + (i + 1), 0));
  }
  alert("Ahora 3er arreglo");
  for (let i = 0; i < largoArray; i++) {
    a3[i] = Number(prompt("3er arreglo, elemento numero: " + (i + 1), 0));
  }
  for (let i = 0; i < largoArray; i++) {
    a4[i] = a1[i] + a2[i] + a3[i];
  }
  return a4;
}

btnComenzar.addEventListener("click", () => {
  let re = new RegExp("^[0-9]$");
  let longitudArray: number = prompt(
    "Ingrese el tamaño de los 3 array(entre 0 y  9) ",
    0
  );
  while (!re.test(longitudArray) {
    longitudArray = Number(
      prompt("Ingrese el tamaño de los 3 array(entre 0 y  9) ", 0)
    );
  }
  let arregloResultado: number[] = completarArreglos(longitudArray);

  let stringArreglo: string = "Arreglo final: [";
  if (arregloResultado.length > 1) {
    stringArreglo += arregloResultado[0];
    for (let i = 1; i < longitudArray; i++) {
      stringArreglo += ´ ,  ${arregloResultado[i]}´;
    }
  } else {
    stringArreglo += arregloResultado[0];
  }

  stringArreglo += " ]";

  pArregloResultado.innerHTML = stringArreglo;
});
