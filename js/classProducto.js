export class Producto {
  constructor(codigo, nombre, descripcion, imagen, stock, categoria) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.stock = stock;
    this.categoria = categoria;
    this.precioTotal = 1;
    this.cantidad = 1;
  }
}
