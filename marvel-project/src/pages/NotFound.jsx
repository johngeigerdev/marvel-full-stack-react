import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate('/');
        }, 10000)

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <Container className="d-flex justify-content-center flex-column min-vh-100 text-center">
          <h2>404 Not Found</h2>
          <p>I am sorry, no Marvel Heroes here..... 😭</p>
          <p><b>You will be redirected to the home page in...</b></p>
          <div>
            <Badge bg="primary" className="mb-3 fs-2 text-center" style={{ width: '10rem'}}>{countdown}</Badge>
          </div>
          <p>Or you can always <Link to="/">go home!</Link></p>
        </Container>
      );
}

export default NotFound;