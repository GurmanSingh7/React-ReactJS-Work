import React from 'react'
import R from "./R"
const Q = (b) => {
console.log(b);
  return (
    <div>
        <h2>
            {b.data}
        </h2>
        <h2>Q</h2>
        <h2>
            <R d = {b.data}/>
        </h2>
        </div>
  )
}

export default Q