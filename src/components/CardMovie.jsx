import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemCard from "./ItemCard";

const CardMovie = ({ propMovie, borrarMovie }) => {
  return (
    <Container>
      <Row className="g-3">
        {
          propMovie.map((movie, indice)=><ItemCard key={indice} propMovie={movie} borrarMovie={borrarMovie} />)
        }
      </Row>
    </Container>
  );
};

export default CardMovie;
