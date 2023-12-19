import './shoppages.css';

function ShopPages({ leftPage, rightPage, amount, pageNumber, numberPage }) {  
  let buts = [];
  for(let i=1; i < amount+1; i++) {
    buts.push(
      <button 
        className={`shop__page ${pageNumber === i && 'shop__page_active'}`} 
        key={i}
        onClick={()=>numberPage(i)}>
        {i}
      </button>)    
    }

  return (
    <div className="shop__pages">
      <button className='shop__arrow' onClick={leftPage}>&larr;</button>
      {amount > 1 && buts}
      <button className='shop__arrow' onClick={rightPage}>&rarr;</button>
    </div>
  )
}

export default ShopPages;