//What this component is going to do
//it will:
// 1. fetch the character (line 32)
// 2. store the data into formData (line 32)
// 3. pass the formData into the CharacterForm as 'initialData' (line 58)
// 4. handle the submission logic with updateCharacter (line 42)

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterForm from './CharacterForm';
import Spinner from 'react-bootstrap/Spinner';

function EditCharacter() {
    const { id } = useParams(); //useParams and other hooks must be at the top of the functional component here
    // what useParams() is doing here is pulling the character id from the route path using React Router
    //it will use the id for that character to fetch the data from the backend and then update it in the PUT request
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        alias: '',
        alignment: '',
        powers: '',
        image_url: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState('true');


    //steps 1 and 2: fetch the caracter once mounted and set the formData with response from backend
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/characters/${id}`)
            .then((response) => setFormData(response.data))
            .catch((error) => setError('Failed to load the character'));
    }, [id]);

    //don't need to validate here b/c the form already has the 'required' attribute

    //step 4 update the character with formData
    //for clarification, 'updatedData' is the formData being passed into updateCharacter from the handleSubmit function in the CharacterForm component
    //it is the user's final form inputs passed in
    const updateCharacter = (updatedData) => {        
        axios.put(`http://127.0.0.1:5000/characters/${id}`, updatedData)
            .then((response) => {
                setSuccess('Character updated successfully');
                setError('');
                setTimeout(() => navigate('/'), 2000) //send the user back to the home page 2 secondsafter submit
            })
            .catch((error) => {
                setError('Failed to update your character');
                setSuccess('');
            });
    };

    return (
        <div className="my-4">
            <CharacterForm  //here I am reusing the CharacterForm for the purpose of update. will also use for delete character
                initialData = {formData}  // step 3: passing the formData prop into the fomr as initialData
                onSubmit = {updateCharacter}
                formTitle = "Edit Character"
            />
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default EditCharacter;