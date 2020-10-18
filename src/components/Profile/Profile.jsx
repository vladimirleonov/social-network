import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
   return (
      <div>
         <div>
            <img className={s.img__big} src="https://s1.paultan.org/image/2013/09/S63-AMG-on-location-07.jpg" />
         </div>
         <div className={s.info__wrapper}>
            <div className={s.ava}>
               {/* <img src="https://scrapmania.ru/i/img/shop/b/94/98/5_/94985_1459937129_35800.jpg" className="ava" /> */}
               <img src="https://i.pinimg.com/736x/68/8f/e4/688fe42e6a4a7784c1dd66a10d6315f8.jpg"/>
            </div>
            <div className={s.info}>
               <div className={s.name}>Vladimir Leonov</div>
               <div className={`${s.text} ${s.birthday}`}><div className={s.title}>Birthday</div><div className={s.descr}>15 september</div></div>
               <div className={`${s.text} ${s.city}`}><div className={s.title}>City</div><div className={s.descr}>Minsk</div></div>
               <div className={`${s.text} ${s.education}`}><div className={s.title}>Education</div><div className={s.descr}>BSU</div></div>
               <div className={`${s.text} ${s.website}`}><div className={s.title}>Web Site</div><div className={s.descr}>sdfsdfsdf</div></div>
            </div>
         </div>
         <MyPosts/>
      </div>
   )
}

export default Profile