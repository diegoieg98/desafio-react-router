import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contacto = () =>{
    return(
        <div className="contacto">
        <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
        <form className="formulario">
            <p>Correo:</p>
            <input className="correo" type="text" placeholder="name@example.com" />
            <p>Descripcion:</p>
            <input className="descripcion" type="text" />
        </form>
        <Button className='button' variant="danger">Enviar</Button>
        </div>
    )
}
export default Contacto;