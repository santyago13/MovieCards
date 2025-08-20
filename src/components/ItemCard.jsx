import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemCard = () => {
  return (
    <div>
      <Card className="h-100 rounded-4 shadow">
        <Card.Header className="text-center">Movie name</Card.Header>
        <Card.Body>
          <Card.Text className="text-center text-muted">Movie genre</Card.Text>
          <Card.Text className="text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
