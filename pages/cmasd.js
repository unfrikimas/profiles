import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from "@emotion/styled";
import IconFacebook from '../components/icons/socials2/facebook';
import IconInstagram from '../components/icons/socials2/instagram';
import IconLinkedin from '../components/icons/socials2/linkedin';
import IconLocation from '../components/icons/location';
import IconBehance from '../components/icons/socials2/behance';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
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
            <title>CmásD Comunicación más digital| Brevi Site</title>
        </Head>

        <section className="w-md mx-auto text-gray-700 body-font h-auto bg-black pb-12">
          <div className="py-2">
            <img 
                className="w-auto mx-auto md:w-1/3"
                src='https://res.cloudinary.com/petportrait/image/upload/v1608664466/brevi_site/Logo-con-el-M%C3%A1s-en-blanco_ssopqb.png'
            />
          </div>
          <div className="max-w-xl md:w-1/2 lg:p-10 mx-auto flex flex-wrap h-auto bg-white rounded-3xl">
            <div className="w-full py-4 mx-auto">
                <div className="">
                    <h1 className="text-lg pt-1 font-bold">CmásD Comunicación más digital</h1>
                    <p className="text-xs text-gray-500 py-1">Apoyamos la transformación digital</p>
                    <div className="flex">
                      <span className="fill-current text-gray-700 -ml-1">
                        <IconLocation width={15} heigth={15} />
                      </span>
                      <p className="pt-0.5 text-xs text-gray-500 pb-3">Bogotá, Colombia</p>
                    </div>
                </div>
                <div className="mt-1">
                  <ul className="flex flex-wrap text-sm items-center">
                    <li className="py-1 px-2 rounded-md mr-2 text-gray-500 bg-gray-200">Branding</li>
                    <li className="py-1 px-2 mr-2 rounded-md bg-gray-200 text-gray-500">Inbound Marketing</li>
                    <li className="py-1 px-2 my-2 rounded-md bg-gray-200 text-gray-500">Lanzamiento de Infoproductos</li>
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
                <div className="pl-2 pb-4 pt-4">
                    <h2 className="text-normal font-medium tracking-normal text-gray-500">Cotenido destacado</h2>
                </div>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2 bg-transparent rounded-3xl">
                  <a href="https://blog.cmasd.co/posicionamiento-de-marca/" target="_blank">
                    <div className="flex flex-wrap w-full h-48 sm:py-24 py-2 sm:px-10 px-2 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608675986/brevi_site/posicionamiento-de-marca-01_qdbffi.jpg" />
                      
                      <div className="flex relative z-10 w-full">
                        <p className="absolute left-1 bottom-2 leading-5 font-medium text-white bg-pink-600 bg-opacity-50 rounded-md px-2 pt-1 pb-2 items-center">Posicionamiento de Marca</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="px-2 w-1/2 bg-transparent rounded-3xl">
                  <a href="https://blog.cmasd.co/branding-estrategico-como-objetivos-empresariales/" target="_blank">
                    <div className="flex flex-wrap w-full h-48 sm:py-24 py-2 sm:px-10 px-2 relative">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608676229/brevi_site/Branding-Estrat%C3%A9gico_akqe9q.jpg" />
                      <div className="relative z-10 w-full">
                        <p className="absolute left-1 bottom-2 leading-5 font-medium text-white bg-blue-600 bg-opacity-50 rounded-md px-2 pt-1 pb-2 ">Branding Estratégico</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="text-right">
                <a 
                  href="https://blog.cmasd.co/"
                  target="_blank"
                  className="mt-6 pl-1 text-gray-500 inline-flex items-center hover:underline">Más contenido
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="pl-2 mt-6 mb-4">
                <h2 className="text-normal font-medium tracking-normal text-gray-500">Portafolio</h2>
              </div>
              <div className="bg-transparent rounded-2xl">
                <a href="https://cmasd.co/portfolio/arrocito-en-bajo/" target="_blank">
                  <div className="flex p-2 my-4 rounded-2xl shadow-lg">
                    <div className="relative w-1/3">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722970/brevi_site/arrocito-600_qbbghi.jpg" />
                    </div>
                    <div className="w-2/3 pl-2 py-2">
                      <h3 className="text-md font-bold pl-1 pb-2">Arrocito en bajo</h3>
                      <ul className="flex flex-wrap text-xs items-center">
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Branding</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Social Media</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Desarrollo Web</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Estrategia</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              <div className="bg-transparent rounded-2xl">
                <a href="https://cmasd.co/portfolio/dr-pulido/" target="_blank">
                  <div className="flex p-2 my-4 rounded-2xl shadow-lg">
                    <div className="relative w-1/3">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722042/brevi_site/doctor-pulido-600_qvngum.jpg" />
                    </div>
                    <div className="w-2/3 pl-2 py-2">
                      <h3 className="text-md font-bold pl-1 pb-2">Dr. Pulido</h3>
                      <ul className="flex flex-wrap text-xs items-center">
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Dirección de Arte</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Rebranding</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Desarrollo Web</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              <div className="bg-transparent rounded-2xl">
                <a href="https://cmasd.co/portfolio/envia/" target="_blank">
                  <div className="flex p-2 my-4 rounded-2xl shadow-lg">
                    <div className="relative w-1/3">
                      <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-2xl" src="https://res.cloudinary.com/petportrait/image/upload/v1608722605/brevi_site/envia-600_lpgneb.jpg" />
                    </div>
                    <div className="w-2/3 pl-2 py-2">
                      <h3 className="text-md font-bold pl-1 pb-2">Envía</h3>
                      <ul className="flex flex-wrap text-xs items-center">
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Animación</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Motion Graphics</li>
                        <li className="py-1 px-2 mx-1 my-1 rounded-md bg-gray-200 text-gray-500">Dirección de Arte</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
              <div className="text-right">
                <a 
                  href="https://cmasd.co/portafolio/"
                  target="_blank"
                  className="mt-4 pl-1 text-gray-500 inline-flex items-center hover:underline">Portafolio completo
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="text-lg text-center leading-6 font-medium text-gray-500 mt-14">
                <p>
                  <span className="">Somos una agencia tan grande</span><br></br>
                  como sus proyectos
                </p>
              </div>
            </div>
            <div className="w-full mt-4 mb-12 rounded-3xl">
              <div className="">
                <ul className="flex h-12 space-x-6 justify-center items-center">
                  <li className="">
                    <a 
                      className="fill-current text-pink-600 hover:text-black"
                      href="https://www.facebook.com/cmasd.co" target="_blank">
                      <IconFacebook width={35} heigth={35} />
                    </a>
                  </li>
                  <a
                    className="fill-current text-pink-600 hover:text-black"
                    href="https://www.instagram.com/cmasd.co/" target="_blank">
                    <li><IconInstagram width={35} heigth={35} /></li>
                  </a>
                  <a
                    className="fill-current text-pink-600 hover:text-black"
                    href="https://www.linkedin.com/company/c-m%C3%A1s-d-comunicaci%C3%B3n-y-desarrollo/" target="_blank">
                    <li><IconLinkedin width={35} heigth={35} /></li>
                  </a>
                  <a
                    className="fill-current text-pink-600 hover:text-black"
                    href="https://www.behance.net/CmasD-agencia?tracking_source=search_users_recommended%7Ccmasd%20" target="_blank">
                    <li><IconBehance width={35} heigth={35} /></li>
                  </a>
                </ul>
              </div>
            </div>            
          </div>
          <div className="text-sm text-white text-center w-full mx-auto mt-8">
            <p>
              Hecho en 
              <Link href="/crearcuenta">
                <Logo> Brevi</Logo>
              </Link>
            </p>
          </div>
        </section>  
        </>      
    );
}
 
export default cmasd;