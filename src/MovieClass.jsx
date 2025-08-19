class Movie {
  #nombre;
  #genero;
  #descripcion;
  constructor(nombre, genero, descripcion) {
    this.#nombre = nombre;
    this.#genero = genero;
    this.#descripcion = descripcion;
  }

  // Getters
  get nombre() {
    return this.#nombre;
  }
  get genero() {
    return this.#genero;
  }
  get descripcion() {
    return this.#descripcion;
  }

  // Setters
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set genero(nuevoGenero) {
    this.#genero = nuevoGenero;
  }
  set descripcion(nuevoDescripcion) {
    this.#descripcion = nuevoDescripcion;
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
