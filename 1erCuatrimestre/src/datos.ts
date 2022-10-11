//script sueldo
//let btnSueldo = <HTMLButtonElement>document.getElementById("btnSueldo");
let d = document;
let iSueldo = <HTMLInputElement>d.getElementById("iSueldo");
let resultadoSueldo = <HTMLParagraphElement>d.getElementById("resultadoSueldo");

btnSueldo.addEventListener("click", () => {
  let sueldo: number = Number(iSueldo.value);
  if (iSueldo.value != "" && sueldo > 0) {
    switch (true) {
      case sueldo <= 15000:
        sueldo = sueldo * 1.2;
        resultadoSueldo.textContent =
          "El aumento sera de un 20%, quedando un salario de $" +
          sueldo.toString();
        console.log(
          "El aumento sera de un 20%, quedando un salario de $" +
            sueldo.toString()
        );
        break;
      case sueldo <= 20000:
        sueldo = sueldo * 1.1;
        resultadoSueldo.innerHTML =
          "<El aumento sera de un 10%, quedando un salario de $" +
          sueldo.toString();
        console.log(
          "El aumento sera de un 10%, quedando un salario de $" +
            sueldo.toString()
        );
        break;
      case sueldo <= 25000:
        sueldo = sueldo * 1.05;
        resultadoSueldo.innerHTML =
          "El aumento sera de un 5%, quedando un salario de $" +
          sueldo.toString();
        console.log(
          "El aumento sera de un 5%, quedando un salario de $" +
            sueldo.toString()
        );
        break;
      default:
        sueldo = sueldo * 1.1;
        resultadoSueldo.innerHTML = "No habra aumento de salario";
        console.log("No habra aumento de salario");
        break;
    }
  } else {
    resultadoSueldo.innerHTML = "Ingrese un numero valido";
    console.log("Ingrese un numero valido");
  }
});

//script numero par
let btnPar = <HTMLButtonElement>document.getElementById("btnPar");
let numeroPar = <HTMLInputElement>document.getElementById("numeroPar");
let resultadoPar = <HTMLParagraphElement>(
  document.getElementById("resultadoPar")
);

btnPar.addEventListener("click", () => {
  let n: number = Number(numeroPar.value);
  if (numeroPar.value != "") {
    if (n % 2 === 0) {
      resultadoPar.innerHTML = "El numero " + n.toString() + " es PAR";
      console.log("El numero " + n.toString() + " es PAR");
    } else {
      resultadoPar.innerHTML = "El numero " + n.toString() + " es IMPAR";
      console.log("El numero " + n.toString() + " es IMPAR");
    }
  } else {
    console.log("Ingrese al menos un numero");
    resultadoPar.innerHTML = "Ingrese al menos un numero";
  }
});

//script Mayor de 3
let btnMayor = <HTMLButtonElement>document.getElementById("btnMayor");
let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let numero3 = <HTMLInputElement>document.getElementById("numero3");
let resultadoMayor = <HTMLParagraphElement>(
  document.getElementById("resultadoMayor")
);
//funciona pero no anda bien el if , cuando dejo los 3 vacios deberia mostrar
// el mensaje de q ingrese un nro
btnMayor.addEventListener("click", () => {
  if (
    numero1.toString() != "" &&
    numero2.toString() != "" &&
    numero3.toString() != ""
  ) {
    let n1: number = Number(numero1.value);
    let n2: number = Number(numero2.value);
    let n3: number = Number(numero3.value);
    if (n1 >= n2) {
      if (n1 >= n3) {
        resultadoMayor.innerHTML = "El mayor es: " + n1.toString();
        console.log("El mayor es: ", n1);
      } else {
        resultadoMayor.innerHTML = "El mayor es: " + n3.toString();
        console.log("El mayor es: ", n3);
      }
    } else {
      if (n2 >= n3) {
        resultadoMayor.innerHTML = "El mayor es: " + n2.toString();
        console.log("El mayor es: ", n2);
      } else {
        resultadoMayor.innerHTML = "El mayor es: " + n3.toString();
        console.log("El mayor es: ", n3);
      }
    }
  } else {
    console.log("Ingrese al menos un numero");
  }
});

//script Calculadora de Descuento
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let precio = <HTMLInputElement>document.getElementById("precio");
let final = <HTMLParagraphElement>document.getElementById("final");
let descontado = <HTMLParagraphElement>document.getElementById("descontado");
let precioFinal: number;
let precioDescontado: number;

btnEnviar.addEventListener("click", () => {
  if (Number(precio.value) > 0) {
    precioFinal = Number(precio.value) * 0.9;
    precioDescontado = Number(precio.value) * 0.1;

    final.innerHTML = "Precio final: " + precioFinal.toString();
    descontado.innerHTML = "Precio descontado: " + precioDescontado.toString();

    console.log("Precio final: ", precioFinal);
    console.log("Precio descontado: ", precioDescontado);
  } else {
    console.log("Numero no valido");
  }
});

//script Autos de carrera
let btnSumarTiempo = <HTMLButtonElement>(
  document.getElementById("btnSumarTiempo")
);
let tiempoVuelta = <HTMLInputElement>document.getElementById("tiempoVuelta");
let tiempoTotal = <HTMLParagraphElement>document.getElementById("tiempoTotal");
let cantidadVueltas = <HTMLParagraphElement>(
  document.getElementById("cantidadVueltas")
);
let vueltaPromedio = <HTMLParagraphElement>(
  document.getElementById("vueltaPromedio")
);

let contadorVueltas: number = 0;
let sumadorTiempo: number = 0;
let promedioVta: number = 0;

btnSumarTiempo.addEventListener("click", () => {
  if (Number(tiempoVuelta.value) > 0) {
    contadorVueltas++;
    sumadorTiempo = sumadorTiempo + Number(tiempoVuelta.value);
    promedioVta = sumadorTiempo / contadorVueltas;

    tiempoTotal.innerHTML = "Tiempo total: " + sumadorTiempo.toString() + "s";
    cantidadVueltas.innerHTML =
      "Cantidad de vueltas: " + contadorVueltas.toString();
    vueltaPromedio.innerHTML =
      "Vuelta Promedio: " + promedioVta.toString() + "s";

    console.log("Tiempo total: ", sumadorTiempo);
    console.log("Cantidad de vueltas: ", contadorVueltas);
    console.log("Vuelta promedio: ", promedioVta);
  } else {
    console.log("Numero no valido");
  }
});
