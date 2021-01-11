import React from "react";
import styled from "@emotion/styled";


const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  color: #fe2c55;
  font-size: 3.2rem;
  font-weight: 700;
`;

const Header = () => {

  return (
    
    <header className="w-full py-6">
      <div>
        <div className="flex items-center justify-center">
          <Logo>Brevi</Logo>
        </div>
        <p className="text-center text-gray-500">Tarjetas web para redes sociales</p>
      </div>
    </header>
  );
};

export default Header;
