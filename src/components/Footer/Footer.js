import styles from './Footer.module.css'
import logo from "./logo-alura.png"
function Footer() {
    return (
        <footer className={styles.rodapie}>
            <h2>Desarrollado por Jesús Gutiérrez con soporte de <img src={logo} alt="Logo alura"/>.</h2>
        </footer>
    )
}

export default Footer;
