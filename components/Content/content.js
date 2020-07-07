import styles from './content.module.css'

import SliderSlick from './Slider/slider' 

function Content() {
    return(
        <>
            <div className={styles.containerContent}>
                <article className={styles.containerGeneral}>
                    <section className={styles.welcomeContainer}>
                        <h2>
                            Venha conhecer!<br/>
                            São feitos com carinho                
                        </h2>
                        <span>Doces nos melhores preços!</span>
                        <a href="#" className={styles.welcomeButton}>Veja mais</a>
                    </section>
                </article>
                                
            </div>
        </>

    )}

export default Content