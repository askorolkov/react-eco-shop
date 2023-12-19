import { useState, useEffect } from 'react';
import './shop.css';
import ShopItem from './shopitem';
import ShopPages from './shoppages';
import GoodsAmount from '../sort/amount';
import GoodsSort from '../sort/goodssort';
import { IShopProduct, 
         ICartProduct,
         TSortBy,
         TPerPage,
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

function Shop(props: IShopProps) { 
  const [itemsToRender, setItemsToRender] = useState<IShopProduct[]>(props.goods.slice(0, props.view.perPage));
  const [showPagesButtons, setShowPagesButtons] = useState(false);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(()=> {    
    handleSort()
  },[ props.view, pageNumber ])

  function handleItemsAmount(val: TPerPage) {  
    props.setView({
      ...props.view,
      perPage: val,
    })
    setPageNumber(1)
  }

  function handleItemsSort(val: TSortBy) {
    props.setView({
      ...props.view,
      sortBy: val,
    })
    setPageNumber(1)    
  }

  function handleSort() {

    const itemsStart = props.view.perPage * (pageNumber - 1)      
    const itemsEnd = itemsStart + props.view.perPage
    
    if(props.view.sortBy === 'По алфавиту') {      
      setItemsToRender(props.goods.slice(0).sort((a, b)=> {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }        
        return 0;
        }).filter((good,i)=>i>=itemsStart && i<itemsEnd))        
    }

    if(props.view.sortBy === 'По цене') {
      setItemsToRender(props.goods.slice(0).sort((a, b)=> a.price - b.price).filter((good,i)=>i>=itemsStart && i<itemsEnd)) 
    }

    if(props.view.sortBy === 'По актуальности') {
      setItemsToRender(props.goods.filter((good,i)=>i>=itemsStart && i<itemsEnd))
    }

  }

  function leftPage(): void {
    if(pageNumber > 1) {
      setPageNumber(pageNumber - 1) 
    }    
  }

  function rightPage(): void {
    const maxPagesAmount = props.goods.length / props.view.perPage
    if(pageNumber < maxPagesAmount) { 
      setPageNumber(pageNumber + 1)
    }    
  } 

  function numberPage(page: number): void {
    setPageNumber(page)
  }

  function handleViewChange(val: 'grid' | 'list'): void {
    props.setView({
      ...props.view,
      viewType: val
    })
  }

  useEffect(()=> {
    props.goods.length <= itemsToRender.length ? setShowPagesButtons(false) : setShowPagesButtons(true)
  }, [ itemsToRender ])
  
  return (
    <div className="shop">
      <div className="shop__header">
        <p className="shop__subtitle">Свежие продукты</p>
        <div className="shop__filters">
          <label className="shop__label">
            На странице:
            <GoodsAmount 
              amount={props.view.perPage}
              onChange={handleItemsAmount}
              />       
          </label>
          <label className="shop__label">
            Сортировка:
            <GoodsSort 
              sortBy={props.view.sortBy}
              onChange={handleItemsSort}
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
      { props.view.viewType === 'grid' ? 
        <section className="shop__grid">
        {itemsToRender.map((good, i) => (
          <ShopItem 
            key={i}             
            view={props.view.viewType}           
            good={good}
            addItem={props.addItem}
            addLike={props.addLike}
            liked={props.likedItems.map(elem => elem.name).indexOf(good.name)}
             />
        ))}
        </section> :
        <section className="shop__list">
        {itemsToRender.map((good, i) => (
            <ShopItem 
              key={i}               
              view={props.view.viewType}              
              good={good}
              addItem={props.addItem}
              addLike={props.addLike}
              liked={props.likedItems.map(elem => elem.name).indexOf(good.name)}
              />
          ))}
        </section>      
      }      
      {showPagesButtons && 
        <ShopPages 
          leftPage={leftPage} 
          rightPage={rightPage} 
          amount={Math.ceil(props.goods.length / props.view.perPage)}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          numberPage={numberPage}
        />
      }
    </div>    
  )
}

export default Shop;