import './App.css';
import BasicExample from './NavBar';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function App() {
    return (
        <div className="App">
            <BasicExample/>
            <Container fluid style={{maxWidth:800, padding:30}}>
                <Row>
                    <h4>React-Bootstrap Container Component</h4>
                </Row>
                <Row>
                    <Col>
                    <Image src= "logo512.png" fluid/>
                    </Col>
                    <Col>
                        Something
                    </Col>
                    <Col>
                        Something
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;