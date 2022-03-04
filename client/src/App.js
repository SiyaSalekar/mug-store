import './App.css';
import React,{Component} from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import DefaultPage from './components/DefaultPage';
import Info from './components/Info'
import Contact from './components/Contact'
import Footer from './components/Footer';
import AddMug from './components/AddMug';


class App extends Component{
  render(){
    return (
    <React.Fragment>
     
    <Navbar/>
    <Routes>
    <Route path='/details' element={<Details/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/' element={<Info/>}/>
    <Route path="/AddMug" element={<AddMug/>} />
    <Route path='/Home' element={<Info/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Shop' element={<ProductList/>}/>
    <Route path="*" element={<DefaultPage/>}/>
    
    </Routes>
    <Footer />
    
    </React.Fragment>

  )
}
}

export default App;
