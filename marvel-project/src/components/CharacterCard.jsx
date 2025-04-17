import Card from 'react-bootstrap/Card';

function titleCase(str) {
    return str
        .toLowerCase() // first makes all letters lowercase
        .split(' ') //splits each word into it's own element into an array
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //sets char at index 0 to uppercase then adds on the rest of the lowercase letters starting at index 1
        .join(' ') //now it's turning the array back into a string seperating each element with a space
}

function CharacterCard({ name, alias, alignment, powers, image_url }) {
    return (
        <Card style={{ width: '28rem' }} className="character-card mb-4 shadow-sm">
            <Card.Img variant="top" src={image_url} alt={`${name} character image`} />
            <Card.Body className="bg-primary text-white d-flex justify-content-center">  
                <div className="text-start">
                    <Card.Title className="fw-bold fs-1 text-center mb-4 text-decoration-underline"> {name} </Card.Title>
                    <Card.Subtitle className="mb-2 text-light fs-4">
                        <strong>AKA: </strong>{titleCase(alias)}
                    </Card.Subtitle>
                    <Card.Text className="mb-2 fs-4"><strong>Alignment: </strong>{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</Card.Text>
                    <Card.Text className="fs-4"><strong>Powers: </strong>{powers}</Card.Text>  
                </div>
                
            </Card.Body>
            
        </Card>
    )
}

export default CharacterCard;