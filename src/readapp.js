import React, { Component } from 'react'
import ReadJson from '../data/data.json'
import './App.css'



class App extends Component {
 render () {
   return (
     <div className='App'>
       <ReadJson />
     </div>
   )
 }
}

export default App