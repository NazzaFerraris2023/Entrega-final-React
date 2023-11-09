import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {NavBar} from './components/navBar'
import {ItemListContainer} from './components/contenedor-lista'
import Error404 from './components/Error404'

function App () {
  return <BrowserRouter> 
  <NavBar />



  {/* rutas */}
  <Routes>
    <Route path='/' 
    element={<ItemListContainer greeting="Chau Mundo"/>}/>
    <Route path='/category/:id' 
    element={<ItemListContainer greeting="Chau Mundo"/>}/>
    <Route path='/items/:id' 
    element={<div>Detalle</div>}/>
    
    <Route path='*' 
    element={<Error404/>}/>
  </Routes>

      

  

  
  </BrowserRouter>
} 

export default App
