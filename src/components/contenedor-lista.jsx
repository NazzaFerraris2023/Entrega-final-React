import "../stylesComponents/contenedorLista.css"
import "../data/productos"
import { useEffect,useState } from "react"
import products from "../data/productos"
import ItemsList from "./itemsList"
export const ItemListContainer =(props)=>{
    const [items,setItems]=useState([])

    useEffect(()=>{
        const MyPromise=new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products)
            },2000)
        })
MyPromise.then((response)=>setItems(response))

    },[])

    console.log(items)

    return (
        <div>
        <div className="Texto">{props.greeting}</div>
        <ItemsList items={items}/>
        </div>
    )
}

