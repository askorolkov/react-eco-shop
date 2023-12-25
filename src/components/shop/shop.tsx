import { useState, useEffect } from 'react';
import './shop.css';
import ShopItem from './shopitem';
import ShopPages from './shoppages';
import GoodsAmount from '../sort/goodsamount';
import GoodsSort from '../sort/goodssort';
import { IShopProduct, 
         ICartProduct,
         TSortBy,
         TPerPage,
         TView,
        } from '../../utils/constants';
import { IShopView } from '../../App';

interface IShopProps {
  goods: IShopProduct[],
  addItem: (item: ICartProduct) => void,
  addLike: (item: IShopProduct) => void,
  likedItems: IShopProduct[],
  view: IShopView,
  setView: (item: IShopView) => void,
}

function Shop({ goods, addItem, view, setView, addLike, likedItems }: IShopProps) { 

  const [itemsToRender, setItemsToRender] = useState<IShopProduct[]>(goods.slice(0, view.perPage));
  const [currentPage, setCurrentPage] = useState(1);

  const showPagesButtons = goods.length > itemsToRender.length;
  const pagesAmount = Math.ceil(goods.length / view.perPage);

  useEffect(()=> {    
    handleSort()
  }, [ view, currentPage ])

  function handleAmountChange(val: TPerPage) {  
    setView({
      ...view,
      perPage: val,
    })
    setCurrentPage(1)
  }

  function handleSortChange(val: TSortBy) {
    setView({
      ...view,
      sortBy: val,
    })
    setCurrentPage(1)    
  }

  function handleViewChange(val: TView) {
    setView({
      ...view,
      viewType: val
    })
  }

  function handleSort() {

    const itemsStart = view.perPage * (currentPage - 1)      
    const itemsEnd = itemsStart + view.perPage
    
    if(view.sortBy === 'По алфавиту') {      
      setItemsToRender(goods.slice(0).sort((a, b)=> {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }        
        return 0;
        }).filter((good, i)=> i>=itemsStart && i<itemsEnd))        
    }

    if(view.sortBy === 'По цене') {
      setItemsToRender(goods.slice(0).sort((a, b)=> a.price - b.price).filter((good,i)=> i>=itemsStart && i<itemsEnd)) 
    }

    if(view.sortBy === 'По актуальности') {
      setItemsToRender(goods.filter((good,i)=> i>=itemsStart && i<itemsEnd))
    }
  }

  function leftPage() {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1) 
    }    
  }

  function rightPage() {
    const maxPagesAmount = goods.length / view.perPage
    if(currentPage < maxPagesAmount) { 
      setCurrentPage(currentPage + 1)
    }    
  }   
  
  return (
    <div className="shop">
      <div className="shop__header">
        <p className="shop__subtitle">Свежие продукты</p>
        <div className="shop__filters">
          <label className="shop__label">
            На странице:
            <GoodsAmount 
              amount={view.perPage}
              onChange={handleAmountChange}
              />       
          </label>
          <label className="shop__label">
            Сортировка:
            <GoodsSort 
              sortBy={view.sortBy}
              onChange={handleSortChange}
            />
          </label>
          <button className="shop__view" id='list' onClick={()=>handleViewChange('list')}></button>
          <button className="shop__view" id='grid' onClick={()=>handleViewChange('grid')}></button>
          <div className="shop__form">
            <input type="search" className="shop__input" placeholder='Поиск' />  
            <button className="shop__search"></button>
          </div>
        </div>
      </div>
      {view.viewType === 'grid' ? 
        <section className="shop__grid">
        {itemsToRender.map((good, i) => (
          <ShopItem 
            key={i}             
            view={view.viewType}           
            good={good}
            addItem={addItem}
            addLike={addLike}
            liked={likedItems.map(elem => elem.name).indexOf(good.name)}
             />
        ))}
        </section> :
        <section className="shop__list">
        {itemsToRender.map((good, i) => (
            <ShopItem 
              key={i}               
              view={view.viewType}              
              good={good}
              addItem={addItem}
              addLike={addLike}
              liked={likedItems.map(elem => elem.name).indexOf(good.name)}
              />
          ))}
        </section>      
      }      
      {showPagesButtons && 
        <ShopPages 
          leftPage={leftPage} 
          rightPage={rightPage} 
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
    </div>    
  )
}

export default Shop;