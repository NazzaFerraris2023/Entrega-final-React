import { useParams } from "react-router-dom"
import "../stylesComponents/contenedorLista.css"
import "../data/productos"
import { useEffect,useState } from "react"
import products from "../data/productos"
import ItemsList from "./itemsList"
export const ItemListContainer =(props)=>{
    const [items,setItems]=useState([])

    const {id} = useParams()

    useEffect(()=>{
        const myPromise=new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products)
            },2000)
        })
myPromise.then((response)=>{
    if(!id){
        setItems(response)
    }
    else {
        const filterByCategory=response.filter(item=>item.category===id)
        setItems(filterByCategory)
    }
    })

    },[id])

    console.log(items)

    return (
        <div>
        <div className="Texto">{props.greeting}</div>
        <ItemsList items={items}/>
        </div>
    )
}

