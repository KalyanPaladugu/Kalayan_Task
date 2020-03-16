import React, { Component } from 'react'
import getdata from '../data/data.json'



class Readjson extends Component {
   render () {
   
   return (
     <div >
      <h1>Welcome React Js Tasks</h1>
       {getdata.map((val,index) => {
        return <div>
        <h1>{val.name}</h1>
        <h2>{val.post}</h2>
        <h3>{val.id}</h3>
        </div>
       })}
     </div>
   )
 }
}
export default Readjson;