import React from "react";
import Head from "next/head";
import IconFacebook from '../../components/icons/facebook'
import IconTwitter from '../../components/icons/twitter'
import IconInstagram from "../../components/icons/instagram";
import IconLinkedin from "../../components/icons/linkedin";
// import styles from '../../styles/scss/profiles.scss'

const CH = () => {

  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/js/helper.js"></script>
      </Head>
      <body>
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
              <div className="card-subtitle">QUÉ HAGO</div>
              <p className="card-desc">
              Expreso mi arte con líneas de código y me dedico a migrar webs hechas con Wordpress. Si quieres llevar tu Wordpress al siguiente nivel, ReactJS es la solución.</p>
              <p className="card-desc">Puedo ayudarte a DIFERENCIAR tu PROYECTO a través de Aplicaciones Web que eleven tu NEGOCIO al siguiente nivel.
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
                <IconLinkedin />
              </a>
            </div>
          </div>
          <div className="card-section" id="experience">
            <div className="card-content">
              <div className="card-subtitle">EXPERIENCIA</div>
              <div className="card-timeline">
                <div className="card-item" data-year="2014">
                  <div className="card-item-title">
                    Front-end Developer at <span>JotForm</span>
                  </div>
                  <div className="card-item-desc">
                    Disrupt stumptown retro everyday carry unicorn.
                  </div>
                </div>
                <div className="card-item" data-year="2016">
                  <div className="card-item-title">
                    UI Developer at <span>GitHub</span>
                  </div>
                  <div className="card-item-desc">
                    Developed new conversion funnels and disrupt.
                  </div>
                </div>
                <div className="card-item" data-year="2018">
                  <div className="card-item-title">
                    Illustrator at <span>Google</span>
                  </div>
                  <div className="card-item-desc">
                    Onboarding illustrations for App.
                  </div>
                </div>
                <div className="card-item" data-year="2020">
                  <div className="card-item-title">
                    Full-Stack Developer at <span>CodePen</span>
                  </div>
                  <div className="card-item-desc">
                    Responsible for the encomposing brand expreience.
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Algonquin Rd, Three Oaks Vintage, MI, 49128
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (269) 756-9809
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  william@rocheald.com
                </div>
                <button className="contact-me">WORK TOGETHER</button>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button data-section="#about" className="is-active">
              QUÉ HAGO
            </button>
            <button data-section="#experience">EXPERIENCIA</button>
            <button data-section="#contact">CONTACTO</button>
          </div>
        </div>
      </div>
      </body>
    </>
  );
};

export default CH;
