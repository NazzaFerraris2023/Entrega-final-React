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
        const findById=response.find((product)=>product.id.toLowerCase()===Number(id).toLowerCase())
        setItem(findById)
    },[id])

    // console.log(items)

    return (
            <Container className="mt-2">
            {item ? <ItemDetail item={item}/> : <>Cargando..</>}
            </Container>
    
    )
}
    )}
