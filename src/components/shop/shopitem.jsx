import './shopitem.css';

function ShopItem(props) {
  function handleAdd() {  
    props.addItem({...props.good, quantity: 1 })    
  }

  function handleLike() {
    props.addLike(props.good)
  }

  return (
    props.view === 'grid' ? 
    <div className="shopitem__grid">
      <div className="shopitem__img">
        <img src={props.good.src} alt="картинка товара" className="shopitem__grid-pic" />
        <div className="shopitem__grid-buttons">
          <button
            onClick={handleAdd} 
            className="shopitem__grid-button shopitem__add"></button>
          <button 
            onClick={handleLike}
            className={`shopitem__list-button ${props.liked == -1? 'shopitem__like' : 'shopitem__like_active'}`}></button>
        </div>
      </div>
      <p className="shopitem__info shopitem__info-grid">{props.good.name}</p>
      <p className="shopitem__info shopitem__info-grid">{props.good.price} &#8381;</p>
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
            className={`shopitem__list-button ${'shopitem__add'}`}></button>
          <button 
            onClick={handleLike}
            className={`shopitem__list-button ${props.liked == -1? 'shopitem__like' : 'shopitem__like_active'}`}></button>
        </div>
      </div>      
    </div>    
  )
}

export default ShopItem;