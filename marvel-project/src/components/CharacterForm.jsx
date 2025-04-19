import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CharacterForm({ initialData, onSubmit, formTitle }) {
    const [ formData, setFormData ] = useState(initialData);

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData((prev) => ({      // 'prev' is telling react to use the previous state as the initial value here
            ...prev,                    // ...prev is spreading the previous data 
            [name]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
            <h2 className="mb-4">{formTitle}</h2>

            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Alias</Form.Label>
                <Form.Control 
                    name="alias"
                    value={formData.alias}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Alignment</Form.Label>
                <Form.Select 
                    name="alignment"
                    value={formData.alignment}
                    onChange={handleChange}
                    required
                >
                    <option value=''>Select Alignment</option>
                    <option value='hero'>hero</option>
                    <option value='villain'>villain</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Powers</Form.Label>
                <Form.Control
                    as='textarea'
                    name='powers'
                    value={formData.powers}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </form>
    )
}

export default CharacterForm