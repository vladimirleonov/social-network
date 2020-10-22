import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

let postData = [
   { id: 1, message: "Hi, how are you?", likeCount:"15" },
   { id: 1, message: "It's my first post", likeCount:"20" },
   { id: 1, message: "It's the best cours", likeCount:"20" }
]

let postsElements = postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

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
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;