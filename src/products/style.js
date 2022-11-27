import styled from "styled-components";

export const CardUl = styled.ul `
 display:flex;
 flex-direction: row;
 overflow-x: scroll;
 list-style: none;
 align-items: center;
 gap: 2rem;
 margin-top: 2rem


`

export const CardLi = styled.li `

display: flex;
align-items: start;
flex-direction: column;
background-color: #fff;
box-sizing: border-box;
border: 2px solid var(--grey-20);
border-radius: 5px;
width: 80%;
height: 70%;
padding: 10px;
gap: 0.5rem;
margin-bottom: 1rem;

h3{
    font-weight: 700;
    font-size: 16px;
    width: 100%
}

p{
    font-weight: 400;
    font-size: 12px;
}

span{
font-weight: 600;
font-size: 14px;
color: var(--color-primary);
   
}

button{
    background-color: var(--color-primary);
    color: #fff;
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    padding: 5px
}

`

export const Image = styled.img `
width: 170px;
height: 150px;
background-color: var(--grey-0);

`