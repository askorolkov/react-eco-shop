import './amount.css';

function GoodsSort({ sortBy, onChange }) {

  return (
    <select
      className='amount'
      value={sortBy} 
      onChange={e => onChange(e.target.value)} >
        <option value="По актуальности">По актуальности</option>
        <option value="По цене">По цене</option>
        <option value="По алфавиту">По алфавиту</option>
    </select>
  )
}

export default GoodsSort;