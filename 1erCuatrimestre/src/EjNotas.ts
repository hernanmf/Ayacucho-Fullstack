let contador: number = 0,
  suma: number = 0;

while (contador < 10) {
  contador++;
  suma += Number(prompt("Ingrese la nota numero " + contador + ": "));
  rcantidadNotas.innerHTML = contador + " Notas ingresadas";
  rpromedio.innerHTML = "El promedio de momento es " + suma / contador;
}
console.log("El promedio final es", suma / contador);
rpromedio.innerHTML = "El promedio final es " + suma / contador;
rcantidadNotas.innerHTML = "Notas ingresadas: 10 ";
