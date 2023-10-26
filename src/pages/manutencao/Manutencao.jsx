import { Link } from 'react-router-dom';
import styles from './Manutencao.module.css';

const Manutencao = () => {
  return (
    <div className={styles.container}>
        <div className={styles.conteudo}>
            <h2>Estamos em manutenção programada</h2>
            <p>Site temporariamente indisponível para dispositivos móveis</p>
            <p>Para entrar em contato conosco <Link to='https://escolamoppe.chat.blip.ai/?appKey=bW9wcGU6MzFlODA5YzYtMDQzOS00NGQ1LTk1YzctNWFmOTAwMjZlMDQ2' target='_blank'>clique aqui</Link></p>
        </div>
    </div>
  )
}

export default Manutencao