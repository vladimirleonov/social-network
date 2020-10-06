import React from 'react'
import './Profile.css'

const Profile = () => {
   return (
      <div className="profile">
         <div>
            <img className="img__big" src="https://s1.paultan.org/image/2013/09/S63-AMG-on-location-07.jpg" />
         </div>
         <div className="info__wrapper">
            <div className="ava">
               {/* <img src="https://scrapmania.ru/i/img/shop/b/94/98/5_/94985_1459937129_35800.jpg" className="ava"/> */}
            </div>
            <div className="info">
               <div className="name">Vladimir Leonov</div>
               <div className="text birthday"><div className="title">Birthday</div><div className="descr">15 september</div></div>
               <div className="text city"><div className="title">City</div><div className="descr">Minsk</div></div>
               <div className="text education"><div className="title">Education</div><div className="descr">BSU</div></div>
               <div className="text website"><div className="title">Web Site</div><div className="descr">sdfsdfsdf</div></div>
            </div>
         </div>
         <div className="post__wrapper">
            <div className="post__header">My posts</div>
            <div className="add-form">
               <form action="#">
                  <input
                     className="new-post"
                     type="text"
                     name="news"
                     placeholder="your news..."
                  />
                  <button className="btn" type="submit">Send</button>
               </form>
            </div>
            <div className="posts">
               <div className="post"><span>post1</span></div>
               <div className="post"><span>post2</span></div>
               <div className="post"><span>post3</span></div>
            </div>
         </div>
      </div>
   )
}

export default Profile