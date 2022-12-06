import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carta2() {
  return (
    <Card style={{ width: '18rem' }}
    bg="dark"
    text="light">

      <Card.Img variant="top" src="https://images.unsplash.com/photo-1605663864774-748f5f858a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>Pack Spiderverso</Card.Title>
        <Card.Text>
          Precio: $59.990
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta2;

