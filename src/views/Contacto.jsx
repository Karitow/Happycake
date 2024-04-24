import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
    return (
        <Container className="text-center">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
    <Form>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
         <Form.Label>Correo</Form.Label>
         <Form.Control type="email" placeholder="Example@happycake.com" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasic">
         <Form.Label>Descripción</Form.Label>
         <Form.Control type="descripcion" placeholder="" />
        </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="danger" type="submit">
            Enviar
        </Button>
    </Form>
        </Container>

    )
}

export default Contacto