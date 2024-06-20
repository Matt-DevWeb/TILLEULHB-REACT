import TilleulLogo from '../img/Logo Tilleul.png';
import '../styles/header.css';

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <div className="titleContainer">
                    <h1>Tilleul Handball Club</h1>
                    <img src={TilleulLogo} alt="Logo Tilleul Handball Club" />
                </div>
            </div>
        </header>
    );
}
