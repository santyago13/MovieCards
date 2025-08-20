import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Movie from "../MovieClass";
import CardMovie from "./CardMovie";

const AltaMovie = () => {
  const [movie, setMovie] = useState([]);
  const [nombre, setNombre] = useState("");
  const [genero, setGenero] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function handleSubmit(data) {
    data.preventDefault();
    const newMovie = new Movie(nombre, genero, descripcion);
    setMovie([...movie, newMovie]);
    console.log(movie);
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
            onChange={(data) => setNombre(data.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Género</Form.Label>
          <Form.Select
            required
            value={genero}
            onChange={(data) => setGenero(data.target.value)}
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
            onChange={(data) => setDescripcion(data.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
      <div className="border my-4 rounded-4 shadow"></div>
      <CardMovie propMovie={movie} />
    </div>
  );
};

export default AltaMovie;
