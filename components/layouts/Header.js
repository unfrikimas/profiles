import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Buscar from "../ui/Buscar";
import Boton from "../ui/Boton";
import { FirebaseContext } from '../../firebase';

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 3.2rem;
  font-weight: 700;
`;

const Header = () => {

  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    
    <header className="w-full min-h-32">
      <div>
        <div className="h-32 flex items-center justify-center">
            <Logo>Brevi</Logo>
        </div>
        {/* <div>
          {usuario ? (
            <>
              <p className="text-xl text-gray-700 text-center py-5">
                Hola { usuario.displayName }
              </p>
              <button 
                onClick={ () => firebase.cerrarSesion() }
              >Cerrar sesión</button>
            </>
          ) 
          : null }
        </div> */}
      </div>
    </header>
  );
};

export default Header;
