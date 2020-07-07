import styles from './header.module.css'



function Header () { 
    return(
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.firstHeaderContainer}>
                    <img className={styles.headerLogo} src="/sweet-chef.png" alt="Logo header"/>
                    <ul className={styles.headerLinks}>
                        <a href=""> <li>Home</li></a>
                        <a href=""> <li>Contato</li></a>                        
                        <a href=""> <li>Pedidos</li></a>
                    </ul>
                </div>
            
                <div className={styles.secondHeaderContainer}>
                    <div className={styles.instagramContainer}>                        
                        <span>SweetChef</span>
                    </div>

                    <div className={styles.whatsappContainer}>                        
                        <span>11-94248-2901</span>
                    </div>
                    <div className={styles.whatsappContainer}>                                            
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header