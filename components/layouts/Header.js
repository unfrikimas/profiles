import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Buscar from "../ui/Buscar";
import Boton from "../ui/Boton";
import { FirebaseContext } from '../../firebase';

const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex: 1;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.a`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  margin: 0 auto;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {

  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    
    <header className="mx-auto py-10">
      <div>
        <div>
          <Link href="/">
            <h1 className="text-3xl text-center font-bold cursor-pointer">Brevi</h1>
          </Link>
        </div>
        <div>
          {usuario ? (
            <>
              <p className="text-xl text-gray-700 text-center py-5">
                Hola { usuario.displayName }
              </p>
              {/* <Boton 
                bgColor="true"
                onClick={ () => firebase.cerrarSesion() }
              >Cerrar sesión</Boton> */}
            </>
          ) : null }
        </div>
      </div>
    </header>
  );
};

export default Header;
