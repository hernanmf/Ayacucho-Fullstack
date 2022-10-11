let d = document;
let btnCalcula = <HTMLButtonElement>d.getElementById("btnCalcula");
let iNota1 = <HTMLInputElement>d.getElementById("iNota1");
let iNota2 = <HTMLInputElement>d.getElementById("iNota2");
let iNota3 = <HTMLInputElement>d.getElementById("iNota3");
let pResultado = <HTMLParagraphElement>d.getElementById("pResultado");
let nota1: number = -1;
let nota2: number = -1;
let nota3: number = -1;

function calculaPromedioDe3(n1, n2, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

function estaEnRango(x: number): boolean{
  if (x >= 0 && x<=10 && x!=""){
    return true;
  }else{
    return false
  }
}

btnCalcula.addEventListener("click", () => {
  nota1 = Number(iNota1.value);
  nota2 = Number(iNota2.value);
  nota3 = Number(iNota3.value);
  if estaEnRango(nota1) &&  estaEnRango(nota2) && estaEnRango(nota3){
    switch (true){
      case calculaPromedioDe3(nota1,nota2,nota3) >8:
                                                    pResultado.innerHTML = "Informe Final: " +calculaPromedioDe3(nota1, nota2, nota3)+ " Excelente!!";
                                                    break;
      case calculaPromedioDe3(nota1,nota2,nota3) >=5:   
                                                    pResultado.innerHTML = "Informe Final: " +calculaPromedioDe3(nota1, nota2, nota3)+ " Aprobado";
                                                    break;
      default:
          pResultado.innerHTML = "Informe Final: " +calculaPromedioDe3(nota1, nota2, nota3)+ " Desaprobado";
          break;
    }  
  } else {
    alert("Alguna o todas las notas no son un valor valido(entre 0 y 10) o no han sido ingresadas. Por favor, verifique los valores e intente nuevamente");
  }
});
