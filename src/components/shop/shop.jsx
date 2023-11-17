import React from 'react';
import './shop.css';
import ShopItem from './ShopItem';
import ShopPages from './shoppages';
import GoodsAmount from '../sort/amount';
import GoodsSort from '../sort/goodssort';
// import { description } from '../../utils/constants';

function Shop(props) { 
  const [itemsToRender, setItemsToRender] = React.useState(props.goods.slice(0, props.amount));
  const [itemsAmount, setItemsAmount] = React.useState(props.amount)
  const [showPagesButtons, setShowPagesButtons] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1)
  const [view, setView] = React.useState('grid')

  function handleItemsAmount(val) {
    console.log(val)
    setItemsToRender(props.goods.slice(0, val))
    setPageNumber(1)
    setItemsAmount(Number(val))
  }

  const handleItemsSort = (val) => {
    console.log(val)
    
    if(val === 'По алфавиту') {
      setItemsToRender(props.goods.sort((a,b)=> {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }        
        return 0;
        }).slice(0,itemsAmount))  
      }

    if(val === 'По цене') {
      setItemsToRender(props.goods.sort((a,b)=> a.price - b.price).slice(0,itemsAmount))
    }
    setPageNumber(1)
  }

  function leftPage() {
    if(pageNumber > 1) {
      const page = pageNumber - 1
      const itemsStart = itemsAmount * (page-1)      
      const itemsEnd = itemsStart + itemsAmount
      setItemsToRender(props.goods.slice(itemsStart, itemsEnd))      
      setPageNumber(page)
    }    
  }

  function rightPage() {
    const maxPagesAmount = props.goods.length / itemsAmount
    if(pageNumber < maxPagesAmount) {
      const page = pageNumber + 1
      const itemsStart = itemsAmount * (page-1)
      const itemsEnd = itemsStart + itemsAmount
      setItemsToRender(props.goods.slice(itemsStart, itemsEnd))
      setPageNumber(page)
    }    
  } 

  function handleGridView() {
    setView('grid')
  }

  function handleListView() {
    setView('list')
  }

  React.useEffect(()=> {
    props.goods.length <= itemsToRender.length ? setShowPagesButtons(false) : setShowPagesButtons(true)
  }, [ itemsToRender ])
  
  return (
    <div className="shop">
      <div className="shop__header">
        <p className="shop__subtitle">Fresh Organic Products</p>
        <div className="shop__filters">
          <label className="shop__label">
            Per Page:
            <GoodsAmount 
              amount={props.amount}
              onChange={handleItemsAmount}
              />       
          </label>
          <label className="shop__label">
            Sort By:
            <GoodsSort 
              sortBy={props.sortBy}
              onChange={handleItemsSort}
            />
          </label>
          <button className="shop__view" id='list' onClick={handleListView}></button>
          <button className="shop__view" id='grid' onClick={handleGridView}></button>
          <div className="shop__form">
            <input type="search" className="shop__input" placeholder='Search' />  
            <button className="shop__search"></button>
          </div>
        </div>
      </div>
      { view === 'grid' ? 
        <section className="shop__grid">
        {itemsToRender.map((good, i) => (
          <ShopItem 
            key={i}             
            view={view}           
            good={good}
            addItem={props.addItem}
             />
        ))}
        </section> :
        <section className="shop__list">
        {itemsToRender.map((good, i) => (
            <ShopItem 
              key={i}               
              view={view}              
              good={good}
              addItem={props.addItem}
              />
          ))}
        </section>      
      }      
      {showPagesButtons && <ShopPages leftPage={leftPage} rightPage={rightPage}/>}
    </div>    
  )
}

export default Shop;