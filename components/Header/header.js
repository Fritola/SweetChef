import styles from './header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'

function Header () { 
    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.firstHeaderContainer}>
                    <img className={styles.headerLogo} src="/header-logo.jpg" alt="Logo header"/>
                    <ul className={styles.headerLinks}>
                        <a href=""> <li>Home</li></a>
                        <a href=""> <li>Contato</li></a>
                        <a href=""> <li>Social</li></a>
                        <a href=""> <li>Pedidos</li></a>
                    </ul>
                </div>
            
                <div className={styles.secondHeaderContainer}>
                    <div className={styles.instagramContainer}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        <span>SweetChef</span>
                    </div>

                    <div className={styles.whatsappContainer}>
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                        <span>11-94248-2901</span>
                    </div>
                    <div className={styles.whatsappContainer}>
                        <FontAwesomeIcon icon={['fab', 'facebook']} />                        
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header