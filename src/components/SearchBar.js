import { useState } from "react"
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Please enter your search movie');
    }
    onSearch(searchTerm);
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicSearch">
        <Form.Control
          type="text"
          placeholder="Search for your Movies....."
          value={searchTerm}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>

    </Form>
  )
}

export default SearchBar;