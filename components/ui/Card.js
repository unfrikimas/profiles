import React from "react";
import IconFacebook from '../icons/facebook'
import IconTwitter from '../icons/twitter'
import IconInstagram from "../icons/instagram";
import IconLinkedin from "../icons/linkedin";
import IconLocation from '../icons/location';
import IconPhone from "../icons/phone";
import IconMail from '../icons/mail';
import Link from 'next/link';

const Card = () => {

    if (process.browser) {
        const buttons = document.querySelectorAll(".card-buttons button");
        const sections = document.querySelectorAll(".card-section");
        const card = document.querySelector(".card");
        
        const handleButtonClick = (e) => {
          const targetSection = e.target.getAttribute("data-section");
          const section = document.querySelector(targetSection);
          targetSection !== "#about"
            ? card.classList.add("is-active")
            : card.classList.remove("is-active");
          card.setAttribute("data-state", targetSection);
          sections.forEach((s) => s.classList.remove("is-active"));
          buttons.forEach((b) => b.classList.remove("is-active"));
          e.target.classList.add("is-active");
          section.classList.add("is-active");
        };
        
        buttons.forEach((btn) => {
          btn.addEventListener("click", handleButtonClick);
        });
    }

  return (
    <>
      <div className="wrap">
        <div className="card" data-state="#about">
          <div className="card-header">
            <div className="card-cover"></div>
            <img
              className="card-avatar"
              src="https://res.cloudinary.com/petportrait/image/upload/c_fill,g_face,h_500,w_500/v1607367558/profiles/IMG_20200323_154006_jrksyk.jpg"
              alt="avatar"
            />
            <h1 className="card-fullname">Carlos Enrique</h1>
            <h2 className="card-jobtitle">Web Developer</h2>
          </div>
          <div className="card-main">
            <div className="card-section is-active" id="about">
              <div className="card-content">
                <div className="card-subtitle">QUIÉN SOY</div>
                <p className="card-desc">
                  Expreso mi arte con líneas de código y me dedico a migrar webs
                  hechas con Wordpress. Si quieres llevar tu Wordpress al
                  siguiente nivel, ReactJS es la solución. Puedo ayudarte a
                  DIFERENCIAR tu PROYECTO a través de Aplicaciones Web que
                  eleven tu NEGOCIO al siguiente nivel.
                </p>
              </div>
              <div className="card-social">
                <a href="#">
                  <IconFacebook />
                </a>
                <a href="#">
                  <IconTwitter />
                </a>
                <a href="#">
                  <IconInstagram />
                </a>
                <a href="#">
                  <IconLinkedin width="100" />
                </a>
              </div>
            </div>
            <div className="card-section" id="experience">
              <div className="card-content">
                <div className="card-subtitle">EXPERIENCIA</div>
                <div className="card-timeline">
                  <div className="card-item" data-year="2020">
                    <div className="card-item-title">
                      Web Developer en <a href="https://blog.cmasd.co" target="_blank"><span>CMASD</span></a>
                    </div>
                    <div className="card-item-desc">
                      Desarrollo de Blog Corporativo y optimización de la web principal.
                    </div>
                  </div>
                  <div className="card-item" data-year="2020">
                    <div className="card-item-title">
                      Web Developer en <span>SrLoko Agencia</span>
                    </div>
                    <div className="card-item-desc">
                      Desarrollo de la web principal de la agencia.
                    </div>
                  </div>
                  <div className="card-item" data-year="2019">
                    <div className="card-item-title">
                      Ecommerce Developer en <span>Lux Watch Straps</span>
                    </div>
                    <div className="card-item-desc">
                      Desarrollo y administración de la tienda en línea de la marca.
                    </div>
                  </div>
                  <div className="card-item" data-year="2019">
                    <div className="card-item-title">
                      Web Developer en <span>Espejitu</span>
                    </div>
                    <div className="card-item-desc">
                      Desarrollo de la web corporativa y automatización de Marketing.
                    </div>
                  </div>
                  <div className="card-item" data-year="2019">
                    <div className="card-item-title">
                      Ecommerce Developer en <span>Templatesfy</span>
                    </div>
                    <div className="card-item-desc">
                      Desarrollo de la tienda en línea y automatización de Marketing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-section" id="contact">
              <div className="card-content">
                <div className="card-subtitle">CONTACTO</div>
                <div className="card-contact-wrapper">
                  <div className="card-contact">
                    <IconLocation />
                    Rota, Cádiz, España
                  </div>
                  <div className="card-contact">
                    <IconPhone />
                    <a href="https://api.whatsapp.com/send?phone=34682811728&text=Hola">
                    (+34) 682 81 17 28
                    </a>
                  </div>
                  <div className="card-contact">
                    <IconMail />
                    carlos@unfrikimas.com
                  </div>
                  <Link href="https://api.whatsapp.com/send?phone=34682811728&text=Hola">
                  <button 
                    className="contact-me"
                  >TRABAJEMOS JUNTOS!</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-buttons">
              <button data-section="#about" className="is-active">
                QUIÉN SOY
              </button>
              <button data-section="#experience">EXPERIENCIA</button>
              <button data-section="#contact">CONTACTO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
