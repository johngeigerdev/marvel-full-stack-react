import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CharacterForm from '../components/CharacterForm';
import Alert from 'react-bootstrap/Alert';

function AddCharacter () {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const initialData = {
        name: '',
        alias: '',
        alignment: '',
        powers: '',
        image_url: ''
    }

    const handleSubmit = (formData) => {
        axios.post('http://127.0.0.1:5000/characters', formData)
            .then((response) => {
                setSuccess('Character added successfully!');
                setError('');
                setTimeout(() => navigate('/'), 2000); //this will send the user back to the home page after submit and a 2 second delay so success msg can display
            })
            .catch((error) => {
                setError('Failed to add character');
                setSuccess('');
            });
    };

    return (
        <div className="bg-dark min-vh-100">
            <Container fluid className='min-vh-100 d-flex justify-content-center align-items-center text-light'>
                <Row className="w-100 justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <CharacterForm
                            initialData = {initialData}
                            onSubmit={handleSubmit}
                            formTitle='Add New Character'
                        />
                        {success && <Alert variant="success">{success}</Alert>}
                        {error && <Alert variant="danger">{error}</Alert>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddCharacter;