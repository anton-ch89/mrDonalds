import styled from "styled-components";


export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Total = styled.div`
  display: flex;
  & span:first-child {
    flex-grow: 1;
    margin: 0 35px 30px;
  }
`;

export const TotalPrice = styled.span`
text-align: right;
min-width: 65px;
margin-left: 20px;
`
