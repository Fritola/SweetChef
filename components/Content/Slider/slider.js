import Slider from "react-slick";
import styles from './slider.module.css'

function SliderSlick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(   
        <div className={styles.sliderContainer}>
            <Slider {...settings}>            
            <div> 
                <img src="/brownie.jpg" alt="" />
            </div>
            
            <div>
                <img src="/brownie.jpg" alt="" />
            </div>
            
            </Slider>
        </div>
      

    )}

export default SliderSlick