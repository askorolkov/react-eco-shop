import './shoppages.css';

function ShopPages(props) {
  return (
    <div className="shop__pages">
      <button className='shop__arrow' onClick={props.leftPage} >&larr;</button>
      <button className="shop__page">1</button>
      <button className="shop__page">2</button>
      <button className="shop__page">3</button>
      <button className='shop__arrow' onClick={props.rightPage}>&rarr;</button>
    </div>
  )
}

export default ShopPages;