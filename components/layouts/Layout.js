import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
    return (  
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
                <meta name="description" content=""></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Tarjetas Webs | Brevi Site</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen">
                <div className="container mx-auto px-4">
                    <Header />
                    <main>
                        { children }
                    </main>
                </div>
            </div>
        </>
    );
}
 
export default Layout;