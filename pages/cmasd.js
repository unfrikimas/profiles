import React from 'react';
import Head from 'next/head';

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

        <section className="text-gray-700 body-font h-screen bg-black">
          <div className="container mx-auto flex flex-wrap h-full">
            <figure className="max-h-32">
                <picture className="relative">
                    <img 
                        className="w-auto"
                        src='https://res.cloudinary.com/petportrait/image/upload/v1608664466/brevi_site/Logo-con-el-M%C3%A1s-en-blanco_ssopqb.png'
                    />
                </picture>
            </figure>
            <div className="lg:w-1/2 px-4 py-4 mx-auto bg-blue-200 rounded-t-3xl">
                <div>
                    <p>Hola, somos</p>
                    <h1
                        className="text-xl font-bold"
                    >Comunicación más digital</h1>
                </div>
                <div className="flex flex-wrap w-full h-1/3 py-8 px-4 relative mb-4 mt-4">
                    <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0 rounded-3xl shadow-lg" src="https://res.cloudinary.com/petportrait/image/upload/v1608670068/brevi_site/IMG_CMASDWEB_HABLEMOS-2_wbdftk.png" />
                    <div className="relative z-10 w-full">
                        <h2 className="text-3xl text-white font-medium title-font mb-2">¡Hablemos!</h2>
                        <p className="leading-relaxed"></p>
                        <a className="mt-2 pl-1 text-gray-800 inline-flex items-center">WhatsApp
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
              <div className="flex flex-wrap h-1/2 -mx-2">
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl shadow-lg">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed"></p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Leer más
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative rounded-3xl shadow-lg">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed"></p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Leer más
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
        </>      
    );
}
 
export default cmasd;