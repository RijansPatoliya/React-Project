import React from 'react'
import {accordionData} from "./AccordionsData.js"
import Accordions from './Accordions'

const App = () => {
  return (
    <>
    <div  className="accordion">
      {accordionData.map(({title,content})=>(
        <Accordions title={title} content={content} />
      ))}
    </div>
    </>
  )
}

export default App