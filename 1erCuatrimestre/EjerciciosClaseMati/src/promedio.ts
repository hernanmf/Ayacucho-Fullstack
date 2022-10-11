let boton1 = <HTMLButtonElement>document.getElementById("btn1");
let boton2 = <HTMLButtonElement>document.getElementById("btn2");
let boton3 = <HTMLButtonElement>document.getElementById("btn3");
let boton4 = <HTMLButtonElement>document.getElementById("btn4");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let dato3 = <HTMLInputElement>document.getElementById("dato3");
let rotulo = <HTMLParagraphElement>document.getElementById("rotulo4");
let nota1: number = 0;
let nota2: number = 0;
let nota3: number = 0;

function calculaPromedio(n1, n2, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

boton1.addEventListener("click", () => {
  nota1 = Number(dato1.value);
  if (nota1 > 10 || nota1 < 0) {
    alert("INGRESE UN VALOR ENTRE 1 Y 10");
  }
});

boton2.addEventListener("click", () => {
  nota2 = Number(dato2.value);
  if (nota2 > 10 || nota2 < 0) {
    alert("INGRESE UN VALOR ENTRE 1 Y 10");
  }
});

boton3.addEventListener("click", () => {
  nota3 = Number(dato3.value);
  if (nota3 > 10 || nota3 < 0) {
    alert("INGRESE UN VALOR ENTRE 1 Y 10");
  }
});

boton4.addEventListener("click", () => {
  console.log(`El promedio es ${calculaPromedio(nota1, nota2, nota3)}`);
  rotulo.innerHTML = "El promedio es " + calculaPromedio(nota1, nota2, nota3);
});
