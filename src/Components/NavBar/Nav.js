import React, {useContext} from "react";
import styled from "styled-components";
import logoImg from "../../image/Nav/logo.svg";
import signImg from "../../image/Nav/sign.svg";
import { Context } from "../functions/context";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: #fff;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;
const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: #299b01;
  border: none;
  cursor: pointer;
  font-size: 12px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-size: 14px;

`;
const LogOut = styled.span`
  font-size: 20px;
  font-weight: bold;
  
  margin-right: 30px;
`;

const Figure = styled.figure `
margin: 0 30px;
`

const NavBar = () => {
  const {auth} = useContext(Context);
  const { authentication, logIn, logOut } = auth;

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication 
      ? (
        <User>
          <Figure>
            <img src={signImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="выйти" onClick={logOut}>X</LogOut>
        </User>
      ) : (
        <Button onClick={logIn}>
          <Figure>
            <img src={signImg} alt='войти' />
            <figcaption>войти</figcaption>
          </Figure>
        </Button>
      )}
    </NavBarStyled>
  );
}

export default NavBar;
