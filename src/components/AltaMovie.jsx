import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AltaMovie = () => {
  //guardar los datos de la película
  const [movie, setMovie] = useState({
    name: "",
    genero: "",
    descripcion: "",
  });
  // guardar los datos en el array pusheando



  return (
    <div className="container">
      <h1 className="text-center my-5">Ingresa una nueva película</h1>
      <Form className="border p-4 rounded-4 shadow">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa un nombre" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSelect">
          <Form.Label>Género</Form.Label>
          <Form.Select as="select" required>
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
