import CharacterCard from '../components/CharacterCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <CharacterCard
      name="John"
      alias="johnny be sexy"
      alignment="not sure"
      powers="Will kill you with sexiness"
      image_url="https://placehold.co/300"
    />
  );
}

export default Home;