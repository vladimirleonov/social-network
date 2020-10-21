import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'

let postData = [
   { id: 1, message: "Hi, how are you?", likeCount:"15" },
   { id: 1, message: "It's my first post", likeCount:"20" },
   { id: 1, message: "It's the best cours", likeCount:"20" }
]

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
            <Post message={postData[0].message} likeCount={postData[0].likeCount} id={postData[0].id}/>
            <Post message={postData[1].message} likeCount={postData[1].likeCount} id={postData[0].id}/>
            <Post message={postData[2].message} likeCount={postData[2].likeCount} id={postData[0].id}/>
         </div>
      </div>
   )
}

export default MyPosts;