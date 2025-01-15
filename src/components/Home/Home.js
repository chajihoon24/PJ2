import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function Home() {


            return (
                <Container id='home_con'>
                    <Row>
                        <Col xs={2} md={4}>
                            <a href="DogList"><Image src="images/mainDog.jpeg" roundedCircle width={400} height={400}  /></a>
                        </Col>
                        <Col xs={2} md={4}>
                            <a href="CatList"><Image id="maincat" src="images/mainCat.jpg" roundedCircle width={400} height={400} /></a>
                        </Col>
                    </Row>
                </Container>
            );
        }

    
