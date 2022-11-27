import styled from "styled-components";
import "../../styles/globalStyles";

export const Header = styled.header `
display: flex;
justify-content: space-around;
flex-direction: column;
width: 100%;
height: 100px;
background-color: var(--grey-0);
align-items: center;
padding: 10px 5px;



div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}
h1{
   font-size: 22px; 
}

span{
    font-size: 14px;
    color: var(--color-secondary);
}

form{
    display: flex;
    flex-direction: row;
    align-items: center;
}

input{
    background-color: #fff;
    border: 1px solid var(--grey-20);
    border-radius:8px;
    width: 100%;
    height: 40px;
    max-width: 380px;
    padding: 0px 95px 0px 5px;
}

button{
width: 23%;
height: 25px;
position: absolute;
right: 30px;
border: 2px solid var(--color-primary);
color:#fff ;
background-color: var(--color-primary);
border-radius: 8px;
}


@media (min-width: 768px){
flex-direction: row;
}
`