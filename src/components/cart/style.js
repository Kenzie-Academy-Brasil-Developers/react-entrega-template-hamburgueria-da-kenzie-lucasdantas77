import styled from "styled-components";



export const DivContainer = styled.div `
width: 90%;
max-width: 370px;
align-items: center;
display: flex;
flex-direction: column;
`
export const SectionCart = styled.section `
width: 100%;
max-width: 300px;
height: 180px;
justify-content: space-between;
border: 2px solid var(--grey-20);
background-color: var(--grey-20);
margin: 2rem 0 0 2rem;

@media (min-width: 768px){
    height: 200px;
}

ul{
    list-style: none;
    overflow-y: scroll;
    height: 50%;
}

h2{
    margin-left: 1rem;
    font-size:16px;
    color: #ffff;

}

`
export const DivCarrinho = styled.div `
    background-color:var(--color-primary);
    padding: 9px 0 0 0;
    width: 99%;
    height: 50px;
    border-radius: 5px 5px 0 0;
    border:2px solid var(--color-primary);

`

export const DivTotal = styled.div `
background-color: var(--grey-20);
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 98%;
max-width: 294px;
border-top: 1px solid var(--grey-50);
height: 50%;
padding: 5px;
border-top: 2px solid var(--grey-50);
margin-left: 31px;

@media (min-width: 768px){
    height: 100px;
}


div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

button{
    width: 100%;
    max-width: 500px;
    background-color: var(--grey-20);
    border: 1px solid var(--grey-50);
    border-radius: 8px;
    padding: 10px;
}


`