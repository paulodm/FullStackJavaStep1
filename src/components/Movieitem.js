
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



const MovieItem = ({ movie }) => {
    return (



        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text> Year: {movie.Year}</Card.Text>
                <Card.Text> Type: {movie.Type}</Card.Text>

            </Card.Body>
        </Card>


    )
}

export default MovieItem;