import React from 'react';
import styles from '../../../styles/scss/luxwatchstraps.module.scss';
import CarruselPrincipal from '../luxwatchstraps/CarruselPrincipal';
import CarruselSecundario from '../luxwatchstraps/CarruselSecundario';
import Image from 'next/image';

const Card = () => {

  return (  

    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image 
            alt="Lux Watch Straps Logo"
            src="https://res.cloudinary.com/petportrait/image/upload/v1617635781/carlosenriquedev/Logo-Lux_igiqop.png"
            // placeholder="blur"
            width={133}
            height={62}          
          />
        </div>
        <div className={styles.carruseluno}>
          <h1>Isofrane Style</h1>
          <CarruselPrincipal />
        </div>
        <div className={styles.carruseldos}>
          <h2>Collections</h2>
          <CarruselSecundario />
        </div>
        <div className={styles.sale}>
          <h2>Sale</h2>
          <a href="https://www.luxwatchstraps.com/collections/lux-watch-straps-spring-blowout-sale">
            <div className={styles.sale_box}>
              <img
                alt="Lux Watch Straps Sale"
                src="https://res.cloudinary.com/petportrait/image/upload/v1624091565/carlosenriquedev/sale_banner_fsfnre.jpg"
              />
              <div className={styles.sale_text}>
                <h3>SPRING SALE</h3>
                <p>Deal 25% OFF or More Piece</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.pre_footer}>
        <Image 
          alt="Lux Watch Straps Logo"
          src="https://res.cloudinary.com/petportrait/image/upload/v1617635144/carlosenriquedev/badgets_cy2j5q.png"
          // placeholder="blur"
          width={261}
          height={57}           
        />
        <h3>*Two FREE Spring Bars</h3>
        <p>$2 Shipping USA</p>
      </div>
      <div className={styles.footer}>
        <img
          alt="Lux Watch Straps Logo"
          src="https://res.cloudinary.com/petportrait/image/upload/v1617635781/carlosenriquedev/Logo-Lux_igiqop.png"
          // placeholder="blur"
          width={133}
          height={62}           
        />
        <img
          alt="Lux Watch Straps Logo"
          src="https://res.cloudinary.com/petportrait/image/upload/v1624026347/carlosenriquedev/secure-checkout-bw_jjkxgu_rylhlh.jpg"
          // placeholder="blur"
          width={278}
          height={39}           
        />
        <p>LUX Watch Straps | Since 2013</p>
      </div>      
    </div>

  );

}


export default Card;