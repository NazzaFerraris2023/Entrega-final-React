import { useParams } from "react-router-dom"
// import "../stylesComponents/contenedorLista.css"
import "../data/productos"
import { useEffect,useState } from "react"
import products from "../data/productos"
import { Container } from "react-bootstrap"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer =()=>{
    const [item,setItem]=useState(null)
    const {id} = useParams()


    useEffect(()=>{
        const myPromise = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products)
            },2000)
        })
    myPromise.then((response)=>{
        console.log(response)
        const findById=response.find((product)=>product.id===Number(id))
        setItem(findById)
    },[id])

    // console.log(items)

    return (
            <Container className="mt-4">
            {item ? <ItemDetail item={item}/> : <>Loding...</>}
            </Container>
    
    )
}
    )}
