import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'


const MyPosts = () => {
   return (
      <div className={s.my__posts}>
         <div className={s.header}>My posts</div>
         {/* <div className={s.new__post}> */}
         <form action="#" className={s.new__post}>
            <input
               // className={c.new__post}
               type="text"
               name="news"
               placeholder="your news..."
            />
            <button className={s.btn} type="submit">Send</button>
         </form>
         {/* </div> */}
         <div className={s.posts}>
            <Post message='Hi, how are you?' likeCount="15"/>
            <Post message="It's my first post" likeCount="20" />
            <Post message="It's the best cours" likeCount="20"/>
         </div>
      </div>
   )
}

export default MyPosts;