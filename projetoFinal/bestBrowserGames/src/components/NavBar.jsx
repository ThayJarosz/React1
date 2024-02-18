import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

export default function NavBar()
{
    const navigate = useNavigate();

    function handleSair() {
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/login');
    }
    
    return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><Link to="/game-form">Cadastrar Novo Jogo</Link></li>
                <li><a onClick={handleSair}>Sair</a></li>
            </ul>
        </nav>
    )
}