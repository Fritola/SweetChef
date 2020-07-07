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
                        <span>Lorem teste dolor sit amet, consectetur adipiscing elit.</span>
                        <a href="#" className={styles.welcomeButton}>Mais doces</a>
                    </section>
                </article>
                
                <SliderSlick />
            </div>
        </>

    )}

export default Content