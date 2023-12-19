import './shopitem.css';
import { IShopProduct, ICartProduct } from '../../utils/constants';

interface IItemProps {
  view: string,
  good: IShopProduct,
  addItem: (item: ICartProduct) => void,
  addLike: (item: IShopProduct) => void,
  liked: number,
}

function ShopItem({ view, good, addItem, addLike, liked }: IItemProps) {

  function handleAdd(): void {  
    addItem({...good, quantity: 1 })    
  }

  function handleLike(): void {
    addLike(good)
  }

  return (
    view === 'grid' ? 
    <div className="shopitem__grid">
      <div className="shopitem__img">
        <img src={good.src} alt="картинка товара" className="shopitem__grid-pic" />
        <div className="shopitem__grid-buttons">
          <button
            onClick={handleAdd} 
            className="shopitem__grid-button shopitem__add"></button>
          <button 
            onClick={handleLike}
            className={`shopitem__list-button ${liked == -1? 'shopitem__like' : 'shopitem__like_active'}`}></button>
        </div>
      </div>
      <p className="shopitem__info shopitem__info-grid">{good.name}</p>
      <p className="shopitem__info shopitem__info-grid">{good.price} &#8381;</p>
    </div> :
    <div className="shopitem__list">     
      <img src={good.src} alt="картинка товара" className="shopitem__list-pic" />      
      <div className="shopitem__list-info">
        <p className="shopitem__info">{good.name}</p>
        <p className="shopitem__info">{good.price} $</p>
        <p className="shopitem__list-desc">description</p>
        <div className="shopitem__list-buttons">
          <button
            onClick={handleAdd}
            className={`shopitem__list-button ${'shopitem__add'}`}></button>
          <button 
            onClick={handleLike}
            className={`shopitem__list-button ${liked == -1? 'shopitem__like' : 'shopitem__like_active'}`}></button>
        </div>
      </div>      
    </div>    
  )
}

export default ShopItem;