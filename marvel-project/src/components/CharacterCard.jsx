import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function titleCase(str) {
    return str
        .toLowerCase() // first makes all letters lowercase
        .split(' ') //splits each word into it's own element into an array
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //sets char at index 0 to uppercase then adds on the rest of the lowercase letters starting at index 1
        .join(' ') //now it's turning the array back into a string seperating each element with a space
}

function CharacterCard({ name, id, alias, alignment, powers, image_url, onDelete }) {
    const [showMore, setShowMore] = useState(false);

    const togglePowers = () => setShowMore(!showMore);

    //if powers is greater than 100 characters, only show characters from index 0 to 100 of the string and then a ... at end
   //if powers is less than 100, show all
    const preview = powers.length > 25 ? powers.slice(0, 25) + '...' : powers; 

    return (
        <Card style={{ width: '25rem' }} className={`character-card mb-4 shadow-sm border-0 ${alignment === 'hero'? 'hero': 'villain'}`}> {/*Using the ternary operator here to set the class based on villain or hero for background type in index.css */}
            <Card.Img src={image_url} alt={`${name} character image`} className='card-img' />
            <Card.Body className="bg-primary text-white d-flex justify-content-center">  
                <div className="text-start">
                    <Card.Title className="fw-bold fs-1 text-center mb-4 text-decoration-underline"> {name} </Card.Title>
                    <div className="text-center mb-3 card-buttons">
                        <Link to={`/edit-character/${id}`} style={{textDecoration: 'none'}}>
                            <Button variant="warning" size="sm">Edit</Button>
                        </Link>
                        <Button variant="danger" size="sm" onClick={() => onDelete(id)} >Delete</Button> 
                    </div>
                    <Card.Subtitle className="mb-2 text-light fs-4">
                        <strong>AKA: </strong>{titleCase(alias)}
                    </Card.Subtitle>
                    <Card.Text className="mb-2 fs-4"><strong>Alignment: </strong>{titleCase(alignment)}</Card.Text>
                    <Card.Text className="fs-4"
                        style={{
                            overflowX: 'hidden', //this makes it so there is no X overflow and no horizontal scroll bar, it stops card from expanding horizontally
                            whiteSpace: 'pre-wrap', //this preserves the line breaks and wraps the text properly
                            wordBreak: 'break-word', //this breaks long words into multible lines if necessary
                            lineHeight: '1.5',
                            maxHeight: showMore ? '150px' : 'auto',  // if showMore is true, it shows as normal
                            overflowY: showMore ? 'auto': 'visible' //if showMore is false, it allows scroll

                        }}
                    >
                        <strong>Powers: </strong>
                        {showMore ? powers : preview}{' '}
                        {powers.length > 25 && (
                            <span
                                onClick={togglePowers}
                                style={{cursor: 'pointer', color: '#ffc107', fontWeight: 'bold'}}
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </span>
                        )}
                    </Card.Text>  
                </div>
                
            </Card.Body>
            
        </Card>
    )
}

export default CharacterCard;