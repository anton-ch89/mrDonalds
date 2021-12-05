import React from "react";
import styled from "styled-components";
import { currency } from "../functions/secondaryFunction";


const List = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`
const Item = styled.li`
position: relative;
width: 400px;
height: 155px;
background-image: ${props => `url(${props.img})`}};
background-position: center;
background-size: cover;
margin: 30px 30px 0 0;
padding: 15px;
font-size: 30px;
color: #fff;
z-index: 2;
&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.35;
    z-index: -1;
}
&:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px #000;
    &:after{
        opacity: 0;
    }
}
`;

const ListItem = ({ itemList, setOpenItem }) => {
  return ( <List>
    {itemList.map((item) => {
      return <Item 
            key={item.id}
            img={item.img}
            onClick={()=>setOpenItem(item)}
            >
        <p>{item.name}</p>
        <p>{currency(item.price)}</p>
      </Item>;
    })}
  </List>
)};

export default ListItem;
