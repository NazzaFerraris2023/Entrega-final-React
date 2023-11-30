import { useParams } from "react-router-dom"
// import "../stylesComponents/contenedorLista.css"
// import "../data/productos"
import { useEffect,useState } from "react"
// import products from "../data/productos"
import { Container } from "react-bootstrap"
import { ItemDetail } from "./ItemDetail";

import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer =()=>{
    const [item,setItem]=useState(null)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "items", id);

        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                setItem({id: docSnapshot.id, ...docSnapshot.data()});
            } else {
                console.log("No such document!");
            }
        });
    },[id])

    return (
        <Container className="mt-4">
        {item ? <ItemDetail item={item}/> : <>Loding...</>}
        </Container>
    )
}