import CharacterCard from '../components/CharacterCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Home({ searchTerm }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/characters')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch users: ${error.message}`);
        setLoading(false);
      });
    }, []);

    const handleDelete = (id) => {
      axios.delete(`http://127.0.0.1:5000/characters/${id}`)
        .then(() => {
          setCharacters(prev => prev.filter(char => char.id !== id));
        })
        .catch(error => console.error(error));
    };
  
  // filtering characters based on the searchTerm prop (searching by name or alias)
    const filteredCharacters = characters.filter(char => {
      const nameMatch = char.name.toLowerCase().includes(searchTerm.toLowerCase());
      const aliasMatch = char.alias.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || aliasMatch;
    })

  //below is mapping through the array of characters and uses the character id as the key and displaying the card for each
  return (
    <Container className="container my-5">
      {filteredCharacters.length === 0 && (  //this will display the below message if the search found nothing
        <p className="text-center mt-4 text-muted">No characters match your search criteria</p>
      )}
      <Row className="g-4 justify-content-center">
        {filteredCharacters.map((char) => (
          <Col key={char.id} sm={12} md={6} lg={4} className='d-flex justify-content-center'>
            <CharacterCard {...char} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;