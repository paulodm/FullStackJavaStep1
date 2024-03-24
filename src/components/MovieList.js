import MovieItem from "./Movieitem"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';



const MovieList = ({ movies }) => {

    return (

        <Container>
            <Row>
                {movies.map((movie) => (
                    //console.log(movie) 
                    //<MovieItem key={movie.imdbID} movie={movie}/>
                    <Col key={movie.imdbID} sm={6} md={4} lg={3} xl={2} >

                        < Card>
                            <Card.Img variant="top" src={movie.Poster} />
                            <Card.Body>
                                <Card.Title>{movie.Title}</Card.Title>
                                <Card.Text> Year: {movie.Year}</Card.Text>
                                <Card.Text> Type: {movie.Type}</Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                ))}
            </Row>
        </Container>


    )

}


export default MovieList;