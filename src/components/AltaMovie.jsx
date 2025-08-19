import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Movie from "../MovieClass";

const AltaMovie = () => {
  const [movies, setMovies] = useState([]);
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const nuevaPelicula = new Movie(nombre, genero, descripcion);
    setMovies([...movies, nuevaPelicula]);
    const updatedMovies = [...movies, nuevaPelicula];
    //limpia los campos
    setNombre("");
    setGenero("");
    setDescripcion("");
    console.log(updatedMovies);
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">Ingresa una nueva película</h1>
      <Form className="border p-4 rounded-4 shadow" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa un nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Género</Form.Label>
          <Form.Select
            required
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Selecciona un género</option>
            <option>Comedia</option>
            <option>Acción</option>
            <option>Infantil</option>
            <option>Terror</option>
            <option>Drama</option>
            <option>Romance</option>
            <option>Ciencia Ficción</option>
            <option>Documental</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required
            style={{ resize: "none" }}
            as="textarea"
            rows={3}
            placeholder="Ingresa una descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </div>
  );
};

export default AltaMovie;
