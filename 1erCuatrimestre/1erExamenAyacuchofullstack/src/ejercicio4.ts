let d = document;
let btnComenzar = <HTMLButtonElement>d.getElementById("btnComenzar");
let pArregloResultado = <HTMLParagraphElement>(
  d.getElementById("pArregloResultado")
);
let esNumero = new RegExp("^[0-9]*$");

btnComenzar.addEventListener("click", () => {
  let numero = Number(
    prompt("Ingrese el numero (debe ser mayor o igual a 1)", 1)
  );
  while (numero < 0 || !esNumero.test(numero)) {
    numero = Number(
      prompt(
        "Ingrese un numero que sea valido por favor, recuerde que debe ser mayor o igual a 1",
        1
      )
    );
  }
  const arregloResultado: number[] = new Array();
  for (let i = numero; i >= 1; i--) {
    arregloResultado.push(i);
  }
  pArregloResultado.innerHTML = "Resultado: [" + arregloResultado + "]";
});
