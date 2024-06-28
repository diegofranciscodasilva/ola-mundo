import styles from './Banner.module.css'
import circuloColorido from 'assets/imagens/circulo_colorido.png'
import diegosocialvermelho from 'assets/imagens/diegosocialvermelho.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo !</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal ! Eu sou Diego, desenvolvedor Front-End. Sempre estudando e aprendendo algo novo. :)</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt="" />
                <img className={styles.minhaFoto} src={diegosocialvermelho} alt="Foto de Diego" />
            </div>
        </div>
    )
}
