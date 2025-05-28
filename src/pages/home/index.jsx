import Header from '../../componentes/header'
import Footer from '../../componentes/footer'
import Sobre from '../sobre'
import { Link } from "react-router-dom"


function Home() {
return (
    <>
<Header />
    <section className='container'>
<div className='apresentacao'>
<p>
Olá, somos <br/>
<span>Raul Gonçalves e Cauan Bastos</span> <br/>
Devs Full Stack
</p>
<Link to="/sobre" className='btn btn-red'>
Saiba mais sobre nós!
</Link>
</div><figure>
<img className='img-home' src="../download.jpg" alt= "Imagem da home" width="500px" height="300px"/>
</figure>
</section>
    <Footer />
    </>
)
}
export default Home
