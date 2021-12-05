import React, {useRef} from "react";
import styled from "styled-components";
import trashCan from "../../image/OrderListItem/trash_can.svg";
import { currency, totalPriceItems } from "../functions/secondaryFunction";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
  flex-wrap: wrap;
  cursor: pointer;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  background: url(${trashCan}) center no-repeat;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;
const ToppingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Toppings = styled.p`
  font-size: 14px;
    color: #9a9a9a;
`;

const OrderListItem = ({ order, deleteItem, index, setOpenItem }) => {
  const topping = order.topping.filter(item => item.checked)
    .map(item => item.name).join(', ')

  const refDeleteButton = useRef(null);


  return (
    <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({ ...order, index })}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{currency(totalPriceItems(order))}</ItemPrice>
      <TrashButton
        ref={refDeleteButton}
        onClick={() => deleteItem(index)}
      />
      <ToppingWrapper>
        {topping && <Toppings>Допы: {topping}</Toppings>}
      </ToppingWrapper>
    </OrderItemStyled>
  );
};

export default OrderListItem;
