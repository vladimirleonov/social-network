import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'



const MyPosts = (props) => {
   
   let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
   
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
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;