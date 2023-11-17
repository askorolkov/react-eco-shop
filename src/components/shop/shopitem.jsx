import './shopitem.css';

function ShopItem(props) {
  function handleAdd() {    
    props.addItem({...props.good, quantity: 1 })    
  }

  return (
    props.view === 'grid' ? 
    <div className="shopitem__grid">
      <div className="shopitem__img">
        <img src={props.good.src} alt="картинка товара" className="shopitem__grid-pic" />
        <div className="shopitem__grid-buttons">
          <button
            onClick={handleAdd} 
            className="shopitem__grid-button shopitem__list-add"></button>
          <button 
            className="shopitem__grid-button shopitem__list-like"></button>
        </div>
      </div>
      <p className="shopitem__info shopitem__info-grid">{props.good.name}</p>
      <p className="shopitem__info shopitem__info-grid">{props.good.price} $</p>
    </div> :
    <div className="shopitem__list">     
      <img src={props.good.src} alt="картинка товара" className="shopitem__list-pic" />      
      <div className="shopitem__list-info">
        <p className="shopitem__info">{props.good.name}</p>
        <p className="shopitem__info">{props.good.price} $</p>
        <p className="shopitem__list-desc">{props.good.description}</p>
        <div className="shopitem__list-buttons">
          <button
            onClick={handleAdd}
            className="shopitem__list-button shopitem__list-add"></button>
          <button 
            className="shopitem__list-button shopitem__list-like"></button>
        </div>
      </div>      
    </div>    
  )
}

export default ShopItem;