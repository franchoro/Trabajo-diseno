import Alert from 'react-bootstrap/Alert';

function Alertas() {
  return (

    /*
    <>
    
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </> */
    

    <>
      {[
        'primary',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Aprovecha nuestros descuentos antes de que se agoten!
        </Alert>
      ))}
    </>
  );
}

export default Alertas;