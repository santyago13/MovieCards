import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ItemCard = ({ propMovie }) => {
  return (
    <Col className="col-12 col-md-6 col-lg-3">
      <Card className="h-100 rounded-4 shadow">
        <Card.Header className="text-center">{propMovie.nombre}</Card.Header>
        <Card.Body>
          <Card.Text className="text-center text-muted">
            {propMovie.genero}
          </Card.Text>
          <Card.Text className="text-center">{propMovie.descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="danger" type="button">
            Borrar
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ItemCard;
