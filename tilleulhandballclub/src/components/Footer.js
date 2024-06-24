import TilleulLogo from '../img/Logo Tilleul.png';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerLogo">
                    <img src={TilleulLogo} alt="Logo Tilleul Handball Club" />
                </div>
                <div className="footerContact"></div>
            </div>
        </footer>
    );
}
