export interface IShopProduct {
  name: string,
  type: string,
  price: number,
  src: string,
}; 

export interface ICartProduct extends IShopProduct {
  quantity: number;
}

export type TSortBy = 'По актуальности' | 'По алфавиту' | 'По цене';
export type TPerPage = 4 | 8 | 16;

export const goodsPerPage = 8;
export const goodsSortBy = 'По актуальности';
export const viewType = 'grid';

export const goods: IShopProduct[] = [
  {name: 'Инжир сушеный',
  type: 'fruits',
  price: 100,
  src:'/fruit2.jpg'}, 
  {name:'Сушеные фрукты',
  type: 'fruits',
  price: 200,
  src: "/fruit1.jpg"},
  {name:'Вегенсы',
  type: 'fruits',
  price: 300,
  src:'/fruit3.jpg'},
  {name:'Мёд липовый',
  type: 'honey',
  price: 400,
  src:'/honey13.png'},
  {name:'Мёд таежный',
  type: 'honey',
  price: 50,
  src:'/honey12.png'},
  {name:'Мёд гречишный',
  type: 'honey',
  price: 100,
  src:'/honey11.png'},
  {name:'Соевый соус',
  type: 'sauce',
  price: 70,
  src:'/sauce3.jpg'},
  {name:'Соус песто',
  type: 'sauce',
  price: 1,
  src:'/sauce2.jpg'},
  {name:'Томатный соус',
  type: 'sauce',
  price: 2,
  src:'/sauce1.png'},
  {name:'Комбуча',
  type:'drink',
  price: 2,
  src:'/drink3.jpg'},
  {name:'Сок свекольный',
  type:'drink',
  price: 2,
  src:'/drink2.jpg'},
  {name:'Лимонад',
  type:'drink',
  price: 2,
  src:'/drink1.png'},
  {name:'Хлебцы томатные',
  type:'fastfood',
  price: 2,
  src:'/fast3.jpg'},
  {name:'Льняные сухарики',
  type:'fastfood',
  price: 2,
  src:'/fast2.png'},
  {name:'Льняные крекеры чесночные',
  price: 2,
  type:'fastfood',
  src:'/fast1.jpg'},
  {name:'Чага-чай',
  type: 'herbal',
  price: 2,
  src:'/herbal3.png'},
  {name:'Чай алтайский',
  type: 'herbal',
  price: 2,
  src:'/herbal2.png'},
  {name:'Саган-дайля',
  type: 'herbal',
  price: 2,
  src:'/herbal1.png'},
]   

// export const description: string = 
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa enim. Nullam id varius nunc id varius nunc.'
  
