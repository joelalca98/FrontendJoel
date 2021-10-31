export class Producto{
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    tiempo: number

    constructor(nombre: string, categoria: string, ubicacion:string, tiempo:number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.tiempo = tiempo;
    }
}