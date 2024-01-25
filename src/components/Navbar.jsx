import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiBookAccount } from '@mdi/js';
import { mdiCake } from '@mdi/js';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="rutas">
                <Icon path={mdiHome} size={1} />
                <Link
                className="link"
                to='/' > Home</Link>
                <Icon path={mdiBookAccount} size={1}/>
                <Link
                className="link"
                to='/contacto'> Contacto</Link>
            </div>
            <div className="cake">
                <h4>Happy Cake </h4>
                <Icon path={mdiCake} size={1} />
            </div>
        </div>
    )
}
export default Navbar;