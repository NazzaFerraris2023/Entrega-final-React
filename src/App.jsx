import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {NavBar} from './components/navBar'
import {ItemListContainer} from './components/contenedor-lista'
import Error404 from './components/Error404'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider } from './context/cartContex'
import Cart from './components/cart'
function App () {
  return (
  <CartProvider>
  <BrowserRouter> 
  <NavBar />



  {/* rutas */}
  <Routes>
    <Route path='/' 
    element={<ItemListContainer greeting="Productos"/>}/>
    <Route path='/category/:id' 
    element={<ItemListContainer greeting="Productos"/>}/>
    <Route path='/items/:id' 
    element={<ItemDetailContainer/>}/>
    <Route path='/cart' 
    element={<Cart/>}/>
    
    <Route path='*' 
    element={<Error404/>}/>
  </Routes>

      

  

  
  </BrowserRouter>
  </CartProvider>
  )
} 

export default App