import React, { useContext } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { Banner } from "./Banner";
// import { useFetch } from "../hooks/useFetch";
import './loader.css';
import { Context } from "../functions/context";

const MenuStyled = styled.main`
  background-color: #b9b9b9;
  margin-top: 80px;
  margin-left: 380px;
`;

const Section = styled.section`
  padding: 30px;
`;

const LoaderWrapper = styled.div `
display: flex;
justify-content: center;
padding: 50px;
`
// const ErrorWrapper = styled.div `
// display: flex;
// justify-content: center;
// align-items: center;
// text-align: center;
// font-size: 36px;
// padding: 50px;
// color: #fff;
// `


export const Menu = () => {
  // const res = useFetch();
  // const dbMenu = res.response;
  const { openItem: {setOpenItem} } = useContext(Context);
  const { dbMenu } = useContext(Context);
  return (
    <MenuStyled>
      <Banner />
      {dbMenu ? (
        <>
          <Section>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </Section>
          <Section>
            <h2>Закуски и напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </Section>
        </>
      ) 
      // : res.error ? (
      //   <ErrorWrapper>Sorry, we will fix it soon...</ErrorWrapper> ) 
        : (
          <LoaderWrapper>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </LoaderWrapper>
      )}
    </MenuStyled>
  );
};
