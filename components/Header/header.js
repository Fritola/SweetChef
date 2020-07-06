import styles from './header.module.css'

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
            </div>
        </header>
    )
}

export default Header