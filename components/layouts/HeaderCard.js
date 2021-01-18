import React, { useEffect } from 'react';
import Link from 'next/link';
import useScript from '../../hooks/useScript';



const HeaderUser = () => {

    const status = useScript(
      'https://widget.cloudinary.com/v2.0/global/all.js'
    );

  const subirFoto = () => {
    const myWidget = cloudinary.createUploadWidget({
      cloudName: 'petportrait', 
      uploadPreset: 'brevisite',
      cropping: true,
      sources: [ 'local', 'url', 'camera'] }, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
        }
      }
    )
    myWidget.open()
  }
  
    return (
      <div>
        <div>
          Script status: <b>{status}</b>
        </div>
        {status === "ready" && (
          <div>
            <button
              className="mx-auto py-4 px-4 border border-gray-700"
              onClick={() => subirFoto()}
            >
              Subir foto
            </button>
          </div>
        )}
      </div>
    
    );
 
}
 
export default HeaderUser;