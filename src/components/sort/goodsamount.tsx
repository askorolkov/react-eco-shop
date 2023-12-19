import { useState } from 'react';
import './amount.css';


function GoodsAmount({ amount, onChange }) {
  const [ selectedAmount, setAmount] = useState<number>(amount);

  function handleChange(val: number) {
    setAmount(val)
    onChange(val)
  }
  
  return (
    <select
      className='amount'
      value={selectedAmount} 
      onChange={e => handleChange(Number(e.target.value))}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
    </select>
  )
}

export default GoodsAmount;