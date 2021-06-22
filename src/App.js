import React, { Component } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Count from './components/Count/Count';
import ListContainer from './components/ListContainer/ListContainer';
import ItemContainer from './components/ItemContainer/ItemContainer';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div>   

        <Header title={'Bienvenido'} subtitle={'A la tienda virtual'}/>  
        <div className="App">
          <ItemContainer />
        </div>

        <div>
          <Count />          
        </div>        

        <div>
          <ListContainer />
        </div>  

        <div>
          <Footer /> 
        </div>            
        
      </div>
      
    )
  }
}

export default App
