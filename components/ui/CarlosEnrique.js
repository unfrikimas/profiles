import React from 'react';
import styles from '../../styles/scss/carlosenrique.module.scss'
import Image from 'next/image';
import IconWebCorporativa from '../icons/carlosenrique/WebCorporativa';
import IconAplicacionWeb from '../icons/carlosenrique/AplicacionWeb';
import IconTiendaEnLinea from '../icons/carlosenrique/TiendaEnLinea';
import IconAMedida from '../icons/carlosenrique/AMedida';
import Carrusel from '../cards/carlosenrique/Carrusel'
import Logo from '../cards/carlosenrique/Logo'
import IconLinkedin from '../cards/carlosenrique/linkedin';
import IconInstagram from '../cards/carlosenrique/instagram';
import IconGithub from '../cards/carlosenrique/github';
import IconWeb from '../cards/carlosenrique/Web';
import { useRouter } from 'next/router'

const Card = () => {

  const router = useRouter()

  return (  
    <>
    <div className={styles.card}>
      {/* <ViewSource pathname="pages/placeholder.js" /> */}
      <div className={styles.card_section}>
        <div className={styles.hero}>
          <div className={styles.img_hero_section}>
            <Image 
              alt="Carlos Enrique Dev"
              src="https://res.cloudinary.com/petportrait/image/upload/v1614274463/carlosenriquedev/personaje3d_r52dik.png"
              // placeholder="blur"
              width={301}
              height={416}          
            />
          </div>
          <div className={styles.cta_hero}>
            <h1>Hago <span>webs</span> guapas y veloces</h1>
            <button
              type="button"
              onClick={() => router.push('https://api.whatsapp.com/send?phone=+34682811728&text=Hola,%20me%20interesa%20acordar%20una%20llamada')}            
            >
              ¿TE INTERESA?
            </button>
          </div>
        </div>
        <div className={styles.services_section}>
          <h2>¿Cómo te puedo ayudar?</h2>
          <div className={styles.services_items_group}>
            <div className={styles.services_item}>
              <IconWebCorporativa />
              <h3>Web Corporativa</h3>
            </div>
            <div className={styles.services_item}>
              <IconAplicacionWeb />
              <h3>Aplicación Web</h3>
            </div>
            <div className={styles.services_item}>
              <IconTiendaEnLinea />
              <h3>Tienda en Línea | Shopify</h3>
            </div>
            <div className={styles.services_item}>
              <IconAMedida />
              <h3>Desarrollo a medida</h3>
            </div>
          </div>
        </div>
        <div className={styles.proyectos}>
          <h2>Proyectos recientes</h2>
          <Carrusel />
        </div>
        <div className={styles.cta_footer}>
          <h2>¿Quieres una tarjeta web como esta?</h2>
          <button
            type="button"
            onClick={() => router.push('https://api.whatsapp.com/send?phone=+34682811728&text=Hola,%20me%20interesa%20acordar%20una%20llamada')}
          >HABLEMOS</button>
        </div>
        <div className={styles.footer}>
          <div className={styles.logo}>
            <Logo width={96} height={114} />
          </div>
          <div className={styles.social_icons}>
            <a href="https://www.linkedin.com/in/carlos-enrique-herrera-betancourt/" target="_blank">
              <IconLinkedin width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/carlosenrique.dev/" target="_blank">
              <IconInstagram width={40} height={40} />
            </a>
            <a href="https://github.com/unfrikimas" target="_blank">
              <IconGithub width={40} height={40} />
            </a>
            <a href="https://carlosenrique.dev/" target="_blank">
              <IconWeb width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .img-hero {
          margin: 50px;
        }
      `}
    </style>
    </>
  );
}
 
export default Card;