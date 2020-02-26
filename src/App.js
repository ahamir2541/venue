import React, { Component } from 'react';
import { Element } from 'react-scroll'
import './resources/styles.css'
import Header from './Components/Header/Header'
import Featured from './Components/Featured/Featured'
import VunueInfo from './Components/VunueInfo/VunueInfo'
import HighLight from './Components/HighLight/HighLight'
import Pricing from './Components/Pricing/Pricing'
import Location from './Components/Location/Location'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div  >
        <Header/>

        <Element name="eventStart">
        <Featured/>
        </Element>
        
        <Element name="venoInfo">
        <VunueInfo/>
        </Element>
        
        <Element name="highLights">
        <HighLight  />
        </Element>

        <Element name="Pricing">
        <Pricing/>
        </Element>
        
        <Element name="Location">
        <Location/>
        </Element>
        
        
        <Footer/>
      </div>
    );
  }
}

export default App;