import React from 'react';
import './amount.css';


function GoodsSort(props) {
  const [selectedSort, setSelectedSort] = React.useState(props.sortBy);

  function handleChange(val) {
    setSelectedSort(val)
    props.onChange(val)
  }

  return (
    <select
      className='amount'
      value={selectedSort} 
      onChange={e => handleChange(e.target.value)} >
        <option value="По актуальности">По актуальности</option>
        <option value="По цене">По цене</option>
        <option value="По алфавиту">По алфавиту</option>
    </select>
  )
}

export default GoodsSort;