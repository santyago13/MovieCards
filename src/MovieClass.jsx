class Movie {
  #nombre;
  #genero;
  #descripcion;

  constructor(nombre, genero, descripcion) {
    this.#nombre = nombre;
    this.#genero = genero;
    this.#descripcion = descripcion;
  }

  get nombre() {
    return this.#nombre;
  }
  get genero() {
    return this.#genero;
  }
  get descripcion() {
    return this.#descripcion;
  }

  toJSON() {
    return {
      nombre: this.#nombre,
      genero: this.#genero,
      descripcion: this.#descripcion,
    };
  }
}

export default Movie;
