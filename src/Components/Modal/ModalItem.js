import React, { useContext } from "react";
import styled from "styled-components";
import { currency, totalPriceItems } from "../functions/secondaryFunction";
import { useCount } from "../hooks/useCount";
import { Button } from "../Style/ButtonCheckout";
import CountItem from "./CountItem";
import Topping from "./Topping";
import { useTopping } from "../hooks/useTopping";
import Choice from "./Choice";
import { useChoice } from "../hooks/useChoice";
import { Context } from "../functions/context";
import { Overlay } from "../Style/MdalStyles";



const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: calc(100% - 200px);
padding: 30px;
`
const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
font-family: "Pacifico", sans-serif;
font-size: 30px;
font-weight: bold;
`

const TotalPriceItem = styled.div`
display: flex;
justify-content: space-between;
`



export const ModalItem = () => {
  const {openItem: {openItem, setOpenItem}} = useContext(Context);
  const {orders: {orders, setOrders}} = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useTopping(openItem);
  const choices = useChoice(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (event) => {
    if (event.target.classList.contains("overlay")) {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  };


  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }


const addToOrder = () => {
  setOrders([...orders, order])
  setOpenItem(null);
}



  return (
    <Overlay className="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
            <HeaderContent>
          <p>{openItem.name}</p>
          <p>
            {currency(openItem.price)}
          </p>
          </HeaderContent>
          <CountItem {...counter} />
          {openItem.toppings && <Topping {...toppings}/>}
          {openItem.choices && <Choice {...choices} openItem={openItem}/>}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{currency(totalPriceItems(order))}</span>
          </TotalPriceItem>
        <Button 
        onClick={ isEdit ? editOrder : addToOrder}
        disabled={order.choices && !order.choice}
        >{isEdit ? 'Редактировать' : 'Добавить'}</Button>
        </Content>
      </Modal>
    </Overlay>
  );
};
