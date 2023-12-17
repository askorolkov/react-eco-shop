import React from 'react';
import './amount.css';


function GoodsAmount(props) {
  const [amount, setAmount] = React.useState<number>(props.amount);

  function handleChange(val: number) {
    setAmount(val)
    props.onChange(val)
  }
  
  return (
    <select
      className='amount'
      value={amount} 
      onChange={e => handleChange(Number(e.target.value))}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
    </select>
  )
}

export default GoodsAmount;