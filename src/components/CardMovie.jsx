import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "./ItemCard";

const CardMovie = () => {
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col className="col-12 col-md-6 col-lg-3">
            <ItemCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardMovie;
