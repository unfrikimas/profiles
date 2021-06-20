import React from 'react';
import Script from 'next/script';

const Formulario = () => {

  return (  

    <>

    <div id="tripetto"></div>
    <Script src="https://unpkg.com/tripetto-runner-foundation" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/tripetto-runner-autoscroll" strategy="beforeInteractive" />
    <Script src="https://unpkg.com/tripetto-services" strategy="beforeInteractive" />

    <Script strategy="lazyOnload">
      {`var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNDFtNjM0R29YNXJhdks1VnNHd2ZyWTN2aFdzeGs5N0kwdVVBTGwwdlQrUT0iLCJkZWZpbml0aW9uIjoiNkFpajRKYkFYZ3VtNWVIMkUyVW95MkZnMmtmWHFDRkVxb1ZyVlk0RGhSaz0iLCJ0eXBlIjoiY29sbGVjdCJ9.fZCpgr_6h8mEI6pZH8b-yNVKkkoLHPpSoWH0jLwm2Cc" });

      TripettoAutoscroll.run({
        element: document.getElementById("tripetto"),
        definition: tripetto.definition,
        styles: tripetto.styles,
        l10n: tripetto.l10n,
        locale: tripetto.locale,
        translations: tripetto.translations,
        attachments: tripetto.attachments,
        onSubmit: tripetto.onSubmit
      });`}
    </Script>

    </>

  );

}
 
export default Formulario;