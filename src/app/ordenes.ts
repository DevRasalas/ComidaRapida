export class Ordenes {
  //Objeto creado a modo de referencia, si crees conveniente podes modificarlo
    id_orden: number;
    productos: string;
    total: number;
    fecha: Date;
    estado: string = 'No Entregado';
    direccion: string;
}
