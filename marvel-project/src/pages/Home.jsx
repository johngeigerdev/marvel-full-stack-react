import CharacterCard from '../components/CharacterCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <CharacterCard
      name="John"
      alias="johnny be sexy"
      alignment="not sure"
      powers="Will kill you with sexiness aasdfasdfasdfasdfjhasdkfjhlaksdjf;lkashdflkjahsdlk asdfjh;la adf; a;dslkf as;dfkha sflkahsdf; ad;sfl asdl;fja;lsdfj ;aldjf ;alds  as;dflkha ;sdf;lasdf ;asldkf l; asdlkfja;sldf j;;laksjd; flkasdfj ;lasdj f;ldsakj f;lasdk fkl;lk a;sldfkja;lsdkfja;lsdkf a;lsdfj;alsd fj;lds jfldksa"
      image_url="https://placehold.co/300"
    />
  );
}

export default Home;