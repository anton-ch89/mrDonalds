import React, { useContext } from "react";
import styled from "styled-components";
import { Overlay, OrderTitle, Total, TotalPrice } from "../Style/MdalStyles";
import { Button } from "../Style/ButtonCheckout";
import { projection } from "../functions/secondaryFunction";
import { currency, totalPriceItems } from "../functions/secondaryFunction";
import { Context } from "../functions/context";

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;
const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const sendOrder = (dataBase, orders, authentication) => {
  let date = new Date();
  date =
    date.getDate() +
    "." +
    (date.getMonth() + 1) +
    "." +
    date.getUTCFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getMinutes();
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref("orders").push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    dateOrder: date,
    order: newOrder,
  });
};
const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : "no toppings"),
  ],
  choice: ["choice", (item) => (item ? item : "no choices")],
};

export const OrderConfirm = () => {
const {orders: { orders, setOrders }} =useContext(Context);
const {auth: { authentication }} =useContext(Context);
const {orderConfirm: { setOpenOrderConfirm }} =useContext(Context);
const {dataBase} =useContext(Context);


  const total = orders.reduce((result, order) => {
    return totalPriceItems(order) + result;
  }, 0);



  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтвердить Ваш заказ</Text>
        <Total>
            <span>Итого:</span>
            <TotalPrice>{currency(total)}</TotalPrice>
        </Total>
        <Button onClick={()=> {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
        }}>Подтвердить</Button>
      </Modal>
    </Overlay>
  );
};
