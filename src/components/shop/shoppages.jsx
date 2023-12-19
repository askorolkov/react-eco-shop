import './shoppages.css';

function ShopPages({ leftPage, rightPage, pagesAmount, pageNumber, setPageNumber }) {  
  let buts = [];
  for(let i=1; i < pagesAmount+1; i++) {
    buts.push(
      <button 
        className={`shop__page ${pageNumber === i && 'shop__page_active'}`} 
        key={i}
        onClick={()=> setPageNumber(i)}>
        {i}
      </button>)    
    }

  return (
    <div className="shop__pages">
      <button className='shop__arrow' onClick={leftPage}>&larr;</button>
      {pagesAmount > 1 && buts}
      <button className='shop__arrow' onClick={rightPage}>&rarr;</button>
    </div>
  )
}

export default ShopPages;