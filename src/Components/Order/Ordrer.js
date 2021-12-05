import React from "react";
import styled from "styled-components";
import { Button } from "../Style/ButtonCheckout";
import OrderListItem from "./OrderListItem";
import { currency, totalPriceItems } from "../functions/secondaryFunction";
import { useContext } from "react/cjs/react.development";
import { Context } from "../functions/context";
import { OrderTitle, Total, TotalPrice } from "../Style/MdalStyles";


const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  width: 380px;
  height: calc(100% - 80px);
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;


const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;





const EmptyList = styled.p`
text-align: center;
`

const Ordrer = () => {
  const { orders : {orders, setOrders} } = useContext(Context);
  const { openItem: {setOpenItem} } = useContext(Context);
  const { auth: {authentication, logIn} } = useContext(Context);
  const { orderConfirm: {setOpenOrderConfirm} } = useContext(Context);


  const total = orders.reduce((result, order) => {
    return totalPriceItems(order) + result;
  }, 0);

  const totalCounter = orders.reduce((result, order) => {
    return order.count + result;
  }, 0);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };
  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш Заказ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((order, index) => {
                return (
                  <OrderListItem
                    key={index}
                    order={order}
                    deleteItem={deleteItem}
                    index={index}
                    setOpenItem={setOpenItem}
                  />
                );
              })}
            </OrderList>
          ) : (
            <EmptyList>Вы еще ничего не заказали</EmptyList>
          )}
        </OrderContent>
        {orders.length 
        ? <>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{currency(total)}</TotalPrice>
        </Total>
          <Button
            onClick={() => {
              if (authentication) {
                setOpenOrderConfirm(true);
              } else {
                logIn();
              }
            }}
          >Оформить</Button>
          </>
        : <></>}
      </OrderStyled>
    </>
  );
};

export default Ordrer;
