import styled from "styled-components";


export const Button =styled.button`
display: block;
margin: 0 auto;
width: 250px;
height: 65px;
font-size: inherit;
font-family: inherit;
background-color: #299b01;
color: #fff;
border-color: transparent;
cursor: pointer;
transition-property: color, background-color, border-color;
transition-duration: 0.3s;
box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);
&:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
    box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);

}
&:disabled {
    background: #ccc;
    color: #696969;
    border: none;
    box-shadow: 2px 2px 5px  rgba(0,0,0,0.3);
}
`