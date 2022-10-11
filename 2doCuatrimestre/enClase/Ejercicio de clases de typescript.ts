Ejercicio de clases de typescript
class Auto {
  Marca: string;
  Modelo: string;
  Segmento: string;
  Potencia: number;
  Traccion: string;
  Encendido: boolean;

  acelerar(): void {}

  frenar(): void {}

  doblar(): void {}

  encederApagar(): void {
    if (this.Encendido) {
      this.Encendido = false;
    } else {
      this.Encendido = true;
    }
  }

  constructor(
    marca: string,
    modelo: string,
    segmento: string,
    potencia: number,
    traccion: string,
    encendido: boolean
  ) {
    this.Marca = marca;
    this.Modelo = modelo;
    this.Segmento = segmento;
    this.Potencia = potencia;
    this.Traccion = traccion;
    this.Encendido = false;
  }
}

const miAutito: Auto = new Auto(`Fiat`,`Punto`,`Hatchback`,`99`,`Delantera`);