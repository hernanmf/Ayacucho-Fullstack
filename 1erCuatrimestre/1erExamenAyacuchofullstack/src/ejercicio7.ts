let btnMostrar = <HTMLButtonElement>document.getElementById("btnMostrar"); //faltaba htmlButtonelement y estan mal las comillas: no funcionan -> ” ”
const arregloDeNumeros = [2, 4, 8, 5, 7];
function mostrarArreglo(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(" ", arr[i]);
    console.log("\n ");
  }
} //; no iba el punto y coma
btnMostrar.addEventListener("click", () => {
  //las comillas del click eran las " ",  no funcionan -> ” ”
  mostrarArreglo(arregloDeNumeros); //falta el arreglo parametro para que trabaje el metodo
});
