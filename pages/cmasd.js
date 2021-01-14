import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from "@emotion/styled";
import IconFacebook from '../components/icons/socials/facebook';
import IconInstagram from '../components/icons/socials/instagram';
import IconLinkedin from '../components/icons/socials/linkedin';
import IconLocation from '../components/icons/location';
import IconBehance from '../components/icons/socials/behance';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 1.1rem;
  font-weight: 700;
`;

const cmasd = () => {
    return (  
        <>

        <Head>
            <meta charSet="utf-8"></meta>
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            ></meta>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
            <title>CmásD | Brevi Site</title>
            <meta name="description" content=""></meta>
            <meta name="keywords" content=""></meta>
            <meta name="author" content=""></meta>
            <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js" />
            <script src="https://unpkg.com/tippy.js@4" />
        </Head>

        <section className="text-gray-700 body-font h-auto bg-black pb-16">
          <div className="">
              <img 
                  className="w-auto mx-auto md:w-1/2"
                  src='https://res.cloudinary.com/petportrait/image/upload/v1608664466/brevi_site/Logo-con-el-M%C3%A1s-en-blanco_ssopqb.png'
              />
          </div>
          <div className="w-full md:w-1/2 lg:p-10 mx-auto flex flex-wrap h-auto bg-white rounded-3xl">
            <div className="w-full px-4 py-4 mx-auto">
                <div className="pl-2">
                    <p className="pl-1">Hola, somos</p>
                    <h1 className="text-2xl py-1 font-bold">Comunicación más digital</h1>
                    <div className="flex">
                      <span className="fill-current text-gray-600">
                        <IconLocation width={15} heigth={15} />
                      </span>
                      <p className="pt-0.5 text-xs text-gray-500 pb-3">Bogotá, Colombia</p>
                    </div>
                </div>
                <div className="mt-1">
                  <ul className="flex flex-wrap text-sm items-center">
                    <li className="py-1 px-3 mx-2 my-1 rounded-lg bg-gray-200 text-gray-700">Branding</li>
                    <li className="py-1 px-3 mx-1 my-1 rounded-lg bg-gray-200 text-gray-700">Inbound Marketing</li>
                    <li className="py-1 px-3 mx-2 my-1 rounded-lg bg-gray-200 text-gray-700">Infoproductos</li>
                    <li className="py-1 px-3 mx-2 my-1 rounded-lg bg-gray-200 text-gray-700">Transformación Digital</li>
                  </ul>
                </div>
                <div className="flex flex-wrap w-full h-52 py-8 px-4 relative mb-4 mt-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608670068/brevi_site/IMG_CMASDWEB_HABLEMOS-2_wbdftk.png" />
                    <div className="relative z-10 w-full">
                        <h2 className="text-3xl text-white font-medium title-font mb-2">¡Hablemos!</h2>
                        <p className="leading-relaxed"></p>
                        <a 
                          href="https://api.whatsapp.com/send?phone=573058261064&text=Hola"
                          target="_blank"
                          className="mt-2 pl-1 text-pink-600 font-bold inline-flex items-center hover:underline">WhatsApp
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="pl-2 pb-4 pt-2">
                    <h2 className="text-xl font-bold">Artículos destacados</h2>
                </div>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2">
                  <a href="https://blog.cmasd.co/posicionamiento-de-marca/" target="_blank">
                    <div className="flex flex-wrap w-full h-48 sm:py-24 py-2 sm:px-10 px-2 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608675986/brevi_site/posicionamiento-de-marca-01_qdbffi.jpg" />
                      
                      <div className="flex relative z-10 w-full">
                        <p className="absolute left-1 bottom-2 leading-5 font-bold text-white bg-pink-600 bg-opacity-50 rounded-lg px-1 pb-1 items-center">Posicionamiento de Marca</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="px-2 w-1/2">
                  <a href="https://blog.cmasd.co/branding-estrategico-como-objetivos-empresariales/" target="_blank">
                    <div className="flex flex-wrap w-full h-48 sm:py-24 py-2 sm:px-10 px-2 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608676229/brevi_site/Branding-Estrat%C3%A9gico_akqe9q.jpg" />
                      <div className="relative z-10 w-full">
                        <p className="absolute left-1 bottom-2 leading-5 font-bold text-white bg-blue-600 bg-opacity-50 rounded-lg px-1 pb-1 ">Branding Estratégico</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-right">
                <a 
                  href="https://blog.cmasd.co/"
                  target="_blank"
                  className="mt-6 pl-1 text-gray-500 inline-flex items-center hover:underline">Más artículos
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="pl-2 mt-6 mb-4">
                <h2 className="text-xl font-bold">Casos de éxito</h2>
              </div>
              <a href="https://cmasd.co/portfolio/arrocito-en-bajo/" target="_blank">
                <div className="flex p-2 my-4 bg-gray-100 rounded-2xl shadow-lg">
                  <div className="relative w-1/3">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722970/brevi_site/arrocito-600_qbbghi.jpg" />
                  </div>
                  <div className="w-2/3 pl-2 py-2">
                    <h3 className="text-lg font-bold pl-1 pb-2">Arrocito en bajo</h3>
                    <ul className="flex flex-wrap text-xs items-center">
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Branding</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Social Media</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Desarrollo Web</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Estrategia</li>
                    </ul>
                  </div>
                </div>
              </a>
              <a href="https://cmasd.co/portfolio/dr-pulido/" target="_blank">
                <div className="flex p-2 my-4 bg-gray-100 rounded-2xl shadow-lg">
                  <div className="relative w-1/3">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722042/brevi_site/doctor-pulido-600_qvngum.jpg" />
                  </div>
                  <div className="w-2/3 pl-2 py-2">
                    <h3 className="text-lg font-bold pl-1 pb-2">Dr. Pulido</h3>
                    <ul className="flex flex-wrap text-xs items-center">
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Dirección de Arte</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Rebranding</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Desarrollo Web</li>
                    </ul>
                  </div>
                </div>
              </a>
              <a href="https://cmasd.co/portfolio/envia/" target="_blank">
                <div className="flex p-2 my-4 bg-gray-100 rounded-2xl shadow-lg">
                  <div className="relative w-1/3">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722605/brevi_site/envia-600_lpgneb.jpg" />
                  </div>
                  <div className="w-2/3 pl-2 py-2">
                    <h3 className="text-lg font-bold pl-1 pb-2">Envía</h3>
                    <ul className="flex flex-wrap text-xs items-center">
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Animación</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Motion Graphics</li>
                      <li className="py-1 px-2 mx-1 my-1 rounded-lg bg-gray-300 text-gray-800">Dirección de Arte</li>
                    </ul>
                  </div>
                </div>
              </a>
              <div className="text-right">
                <a 
                  href="https://cmasd.co/portafolio/"
                  target="_blank"
                  className="mt-4 pl-1 text-gray-500 inline-flex items-center hover:underline">Más casos de éxito
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="text-xl text-center font-bold text-gray-500 mt-14">
                <p>
                  <span className="">Somos una agencia tan grande</span><br></br>
                  como sus proyectos
                </p>
              </div>
            </div>
            <div className="w-full my-8 rounded-3xl">
              <div className="">
                <ul className="flex h-12 justify-center items-center gap-6">
                  <li className="">
                    <a 
                      className="fill-current text-pink-600 hover:text-gray-600"
                      href="https://www.facebook.com/cmasd.co" target="_blank">
                      <IconFacebook width={35} heigth={35} />
                    </a>
                  </li>
                  <a
                    className="fill-current text-pink-600 hover:text-gray-600"
                    href="https://www.instagram.com/cmasd.co/" target="_blank">
                    <li><IconInstagram width={35} heigth={35} /></li>
                  </a>
                  <a
                    className="fill-current text-pink-600 hover:text-gray-600"
                    href="https://www.linkedin.com/company/c-m%C3%A1s-d-comunicaci%C3%B3n-y-desarrollo/" target="_blank">
                    <li><IconLinkedin width={35} heigth={35} /></li>
                  </a>
                  <a
                    className="fill-current text-pink-600 hover:text-gray-600"
                    href="https://www.behance.net/CmasD-agencia?tracking_source=search_users_recommended%7Ccmasd%20" target="_blank">
                    <li><IconBehance width={35} heigth={35} /></li>
                  </a>
                </ul>
              </div>
              <div className="pl-2 mt-4 mb-4">
                <h2 className="text-xl text-center text-pink-600 font-bold">¡Síguenos!</h2>
              </div>
            </div>            
          </div>
          <div className="text-white text-center w-full mx-auto mt-8">
            <p>
              Hecho en 
              <Link href="/">
                <Logo className="font-bold hover:text-principal-hover cursor-pointer"> Brevi</Logo>
              </Link>
            </p>
          </div>
        </section>  
        </>      
    );
}
 
export default cmasd;