import React from 'react';
import './shop.css';
import ShopItem from './ShopItem';
import ShopPages from './shoppages';
import GoodsAmount from '../sort/amount';
import GoodsSort from '../sort/goodssort';

function Shop(props) { 
  const [itemsToRender, setItemsToRender] = React.useState(props.goods.slice(0, props.view.perPage));
  const [showPagesButtons, setShowPagesButtons] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1)

  React.useEffect(()=> {    
    handleSort()
  },[ props.view, pageNumber ])

  function handleItemsAmount(val) {  
    props.setView({
      ...props.view,
      perPage: Number(val),
    })
    setPageNumber(1)
  }

  function handleItemsSort(val) {
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

  function leftPage() {
    if(pageNumber > 1) {
      setPageNumber(pageNumber - 1) 
    }    
  }

  function rightPage() {
    const maxPagesAmount = props.goods.length / props.view.perPage
    if(pageNumber < maxPagesAmount) { 
      setPageNumber(pageNumber + 1)
    }    
  } 

  function numberPage(page) {
    setPageNumber(page)
  }

  function handleGridView() {
    props.setView({
      ...props.view,
      viewType: 'grid'
    })
  }

  function handleListView() {
    props.setView({
      ...props.view,
      viewType: 'list'
    })
  }

  React.useEffect(()=> {
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
          <button className="shop__view" id='list' onClick={handleListView}></button>
          <button className="shop__view" id='grid' onClick={handleGridView}></button>
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