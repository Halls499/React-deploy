import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
return (
<header className={styles.header}>
<span> Raul Gonçalves </span>
<nav>
<Link to="/">Home</Link>
<Link to="/sobre">Sobre</Link>
<Link to="/projetos">Projetos</Link>
<Link to="/contatos">Contatos</Link>
<Link to="/"><span>Raul Gonçalves e Cauan Bastos</span></Link>
</nav>
</header>
)
} 

export default Header