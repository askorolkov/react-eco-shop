import React from 'react';
import './amount.css';


function GoodsAmount(props) {
  const [amount, setAmount] = React.useState(props.amount);

  function handleChange(val) {
    setAmount(val)
    props.onChange(val)
  }
  
  return (
    <select
      className='amount'
      value={amount} 
      onChange={e => handleChange(e.target.value)} >
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
    </select>
  )
}

export default GoodsAmount;