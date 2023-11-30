import { useParams } from "react-router-dom"
import "../stylesComponents/contenedorLista.css"
// import "../data/productos"
import { useEffect,useState } from "react"
// import products from "../data/productos"
import ItemsList from "./itemsList"
import {getFirestore,getDocs, collection} from 'firebase/firestore'
import { initializeApp } from "firebase/app";




export const ItemListContainer =(props)=>{
    const [items,setItems]=useState([])
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection).then((querySnapshot) => {
            let items = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            });
            if (id) {
                items = items.filter(item => item.category && item.category.toLowerCase() === id.toLowerCase());
            }
            setItems(items);
        });
    },[id])

    return (
        <div>
        <div className="Texto">{props.greeting}</div>
        <ItemsList items={items}/>
        </div>
    )
}
