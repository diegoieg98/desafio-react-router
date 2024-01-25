import Icon from '@mdi/react';
import { mdiCakeVariant } from '@mdi/js';
const Home = () =>{
    return(
        <div className='home'> 
        <h1 className='titulo'>Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <Icon className='cakeHome' path={mdiCakeVariant} size={8} />
        </div>
    )
}
export default Home;