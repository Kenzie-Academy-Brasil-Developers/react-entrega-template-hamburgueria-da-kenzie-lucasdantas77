
import styled from "styled-components";
import "../../styles/globalStyles";

export const Header = styled.header `
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
height: 100px;
background-color: var(--grey-0);
align-items: center;
padding: 0 0 10px 0;



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
    margin-left: 4rem
}

button{
width: 200px;
height: 25px;
position: relative;
right: 25%;
border: 2px solid var(--color-primary);
color:#fff ;
background-color: var(--color-primary);
border-radius: 8px;
}


@media (min-width: 768px){
flex-direction: row;

h1{
    margin-left: 10rem;
}

}
`