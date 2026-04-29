import React from 'react'
import Q from './Q'
const P = (c) => {
    console.log(c);
  return (
    <div>
        <h1>
            {c.data}
        </h1>
        <h3 style={{ color: "black" }}>P</h3>
        <h2>
        <Q b = {c.data}/>
        </h2>
        </div>
  )
}

export default P