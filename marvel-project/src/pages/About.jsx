import { Container, Row, Col, Carousel } from 'react-bootstrap';

function About() {
    const heroes = [
        {
            name: "Iron Man",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png"
        },
        {
            name: "Thor",
            img: "https://upload.wikimedia.org/wikipedia/en/1/17/Thor_by_Olivier_Coipel.png"
        },
        {
            name: "Spider Man",
            img: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
        }
    ];
    return(
        <Container fluid className="bg-dark text-center">
            <Row className = "justify-content-center text-center">
                <h3 className="about-heading my-5"> Welcome to my module-7 full-stack Marvel project</h3>
            </Row>
            <Row className="mb-5 justify-content-center">
                <Col xs={12} className="d-flex justify-content-center">
                    <div style={{ width: '100%', maxWidth: '350px' }}>  
                        <Carousel className="mb-4">
                            {heroes.map(hero => (
                                <Carousel.Item key={hero.name}>
                                    <div style={{ height: '400px'}} className="d-flex justify-content-center align-items-center">
                                        <img
                                            src={hero.img}
                                            alt={hero.name}
                                            style={{ maxHeight: '100%', objectFit: 'contain'}}
                                        />
                                    </div>
                                    <Carousel.Caption style={{ textShadow: '2px 2px black' }} >
                                        <h3>Iron Man</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col xs={12} md={10} lg={8} className="about-text text-start py-5 px-4 mx-auto">
                    <p>
                        In this project, I used several Javascript and React concepts to put everything together. The back-end was 
                        provided so that students could focus on their front-end skills in this project. I took the back-end files and
                        tied them in with the front-end that I created. I added the database to MySQL for use in this project. I used 
                        Axios for the HTTP requests along with React Router for page navigation. In addition, I used React-Bootstrap for sytling.
                    </p>
                    <br />
                    <p>
                        This project demonstrates my understanding of state management, component reuse, routing, backend integration
                        and responsive design with CSS and React-Bootstrap.
                    </p>
                    <br />
                    <h3>Some Key Features:</h3>
                    <ul>
                        <li>Users can browse, search, add, edit and delete Marvel characters.</li>
                        <li>Implemented CRUD operations with full form validation.</li>
                        <li>Used conditional rendering for alerts, spinners and feedback messages to the user.</li>
                        <li>Implemented a 404 page that redirects to home after 4 seconds if user enters a path that does not exist.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;