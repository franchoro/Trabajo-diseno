import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carta3() {
  return (
    <Card style={{ width: '18rem' }}
    bg="dark"
    text="light">

      <Card.Img variant="top" src="https://images.unsplash.com/photo-1607871549309-5225845dc91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>bruja</Card.Title>
        <Card.Text>
          precio: $14.990
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta3;

