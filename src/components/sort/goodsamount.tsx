import './amount.css';

function GoodsAmount({ amount, onChange }) { 

  return (
    <select
      className='amount'
      value={amount} 
      onChange={e => onChange(Number(e.target.value))}>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
    </select>
  )
}

export default GoodsAmount;