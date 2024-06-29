
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/Header/NavBar/NavBar'
import Home from './Components/Home/Home'
import ProductDetails from './Components/Products/ProductDetails/ProductDetails'
import Stores from './Components/Collections/Stores/Stores'



function App() {

  return (
    <>
   
    <NavBar/>
    <Routes>
      <Route exact path='/E-Commerce' element={<Home/>}/>
      <Route exact path='/details/gid://shopify/Product/:id' element={<ProductDetails/>}/>
      <Route exact path='/stores' element={<Stores/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
