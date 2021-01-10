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
    
    <header className="w-full min-h-32">
      <div>
        <div className="h-32 flex items-center justify-center">
            <Logo>Brevi</Logo>
        </div>
      </div>
    </header>
  );
};

export default Header;
