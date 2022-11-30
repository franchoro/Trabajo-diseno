import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carta1() {
  return (
    <Card style={{ width: '18rem' }}
    bg="dark"
    text="light">
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1604168841053-91d655383dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbGxvd2VlbiUyMGNvc3R1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>harley Quinn</Card.Title>
        <Card.Text>Precio: $19.990
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Carta1;



