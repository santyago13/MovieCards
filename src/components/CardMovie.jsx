import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardMovie = () => {
  return (
    <div>
      <Container>
        <Row className="g-3">
          <Col className="col-12 col-md-6 col-lg-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="text-center">Movie name</Card.Title>
                <Card.Text className="text-center text-muted">
                  Movie genre
                </Card.Text>
                <Card.Text className="text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardMovie;
