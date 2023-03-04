import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from './Pages/Menu';
import Scanner from './Scanner';
import Summary from './Pages/Summary';
import TableNumContext from './TableNumContext';
import CartContext from './CartContext';
const App = () => {
  return (
    <>
    <CartContext>


    <TableNumContext>

       <BrowserRouter>
          <Routes>
              
            <Route path='/' element={<Scanner/>} ></Route>  
            <Route path='/menu' element={<Menu/>} >
              
              </Route>  
               <Route path='/summary' element={<Summary/>} ></Route>  
            
          </Routes>
       </BrowserRouter>    
    </TableNumContext>
    </CartContext>
      
    </>
  )
}
export default App;