import './profile.css';

function Profile(props) {
  return(
    <div className="profile">
      <h2 className="profile__title">Профиль</h2>
      <p className="profile__info">Имя: Вася</p>
      <p className="profile__info">Email: vasyapup@vasya.ru</p>
      <div className="profile__likes">
        <h3 className="profile__likes-title">Список понравившихся предметов</h3> 
          {props.likedItems.map((item, i)=> (
            <div className="profile__liked-item" key={i}>
              <img src={item.src}  alt="" className='profile__liked-pic'/>
              <h3 className="profile__liked-name">{item.name}</h3>
              <p className="profile__liked-price">{item.price} &#8381;</p>
            </div>           
            )
          )}      
      </div>
    </div>
  )
}

export default Profile;