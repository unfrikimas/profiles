import React from "react";
import Head from 'next/head'
import Card from '../components/ui/CarlosEnrique';

const CH = () => {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />         
      </Head>
      <Card />
    </>
  );
};

export default CH;
