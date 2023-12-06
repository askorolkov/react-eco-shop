import './shoppages.css';

function ShopPages(props) {  

  let buts = [];
  for(let i=1; i < props.amount+1; i++) {
    buts.push(
      <button 
        className={`shop__page ${props.pageNumber === i && 'shop__page_active'}`} 
        key={i}
        onClick={()=>props.numberPage(i)}>
        {i}
      </button>)
    
    }

  return (
    <div className="shop__pages">
      <button className='shop__arrow' onClick={props.leftPage}>&larr;</button>
      {props.amount > 1 && buts}
      <button className='shop__arrow' onClick={props.rightPage}>&rarr;</button>
    </div>
  )
}

export default ShopPages;