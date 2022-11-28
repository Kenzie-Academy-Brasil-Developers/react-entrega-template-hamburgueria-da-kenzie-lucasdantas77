import styled from "styled-components";

export const SectionCart = styled.section `
width: 80%;
max-width: 350px;
heigth:90px;
border-radius: 5px;
border: 2px solid var(--grey-20);
background-color: var(--grey-20);
margin: 2rem 0 0 1rem;

@media (min-width: 768px){
    height: 80px
}

div{
    background-color:var(--color-primary);
    padding: 9px 0 0 0;
    width: 99%;
    height: 50px;
    border-radius: 5px 5px 0 0;
    border:2px solid var(--color-primary);
}

h2{
    font-size:16px;
    color: #ffff;

}

`