import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { CardLi, CardUl, Image } from "./style";


export const List = ()=>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
     async function renderCards(){
        try {
        const res = await api.get("/products")
        setProducts(res.data)     
        } catch (error) {
            
        }
     }
     renderCards()
    }, []);

    return(
    <CardUl>
    {products.map(lista=>
        <CardLi key={lista.id}>
            <Image src={lista.img} alt= "imagem do produto"></Image>
            <h3>{lista.name}</h3>
            <p>{lista.category}</p>
            <span>{`R$ ${lista.price}`}</span>
            <button>Adicionar</button>
         </CardLi>
        )
    }
   </CardUl>      
    )
}