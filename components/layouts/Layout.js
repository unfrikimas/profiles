import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => {
    return (  
        <>
            <Head>
                <meta charset="utf-8"></meta>
                <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
                <meta name="description" content=""></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <title>Brevi</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.1/tailwind.min.css" integrity="sha512-+WF6UMXHki/uCy0vATJzyA9EmAcohIQuwpNz0qEO+5UeE5ibPejMRdFuARSrl1trs3skqie0rY/gNiolfaef5w==" crossOrigin="anonymous" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            </Head>

            <div className="bg-gray-100 min-h-screen">
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