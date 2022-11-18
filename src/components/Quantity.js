import React, { useState } from 'react'

//     This Component will update the Quantity of the single item in the Cart.
const Quantity = ({ cart }) => {
  const [ans, setAns] = useState(1);
  return (
    <div>
      {
        <input type="number" value={ans} onChange={(e) => setAns(e.target.value)} />
      }
    </div>
  )
}

export default Quantity