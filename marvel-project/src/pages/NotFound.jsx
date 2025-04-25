import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { Container, Row, Col } from 'react-bootstrap';

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
        <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center w-100">
          <Container className="text-center">
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6}>
                <h2>404 Not Found</h2>
                <p>I am sorry, no Marvel Heroes here..... 😭</p>
                <p><b>You will be redirected to the home page in...</b></p>
                <div>
                  <Badge bg="primary" className="mb-3 fs-2 text-center" style={{ width: '10rem'}}>{countdown}</Badge>
                </div>
                <p>Or you can always <Link to="/">go home!</Link></p>
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default NotFound;