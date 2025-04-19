import CharacterCard from '../components/CharacterCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios';

function Characters() {
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

  return { characters, loading, error };
}

function Home() {
  const { characters } = Characters();

  //below is mapping through the array of characters and uses the character id as the key and displaying the card for each
  return (
    <Container className="container my-5">
      <Row className="g-4 justify-content-center">
          {characters.map((char) => (
            <Col key={char.id} sm={12} md={6} lg={4} className='d-flex justify-content-center'>
              <CharacterCard {...char} />   {/* doing <CharacterCard {...char} is using the spread operator, it's the same as typing each prop out like
                                            <CharacterCard name={char.name} alias={char.alias} alignment={char.alignment} powers={char.powers} image_url={char.image_url} > it's a shorthand way to do it*/}
            </Col>
          ))}
      </Row>
      
    </Container>
    
  );
}

export default Home;