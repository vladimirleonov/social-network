import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'
import addPost from '../../../redux/state';



const MyPosts = (props) => {
   
   const newPostElement = React.createRef();

   let addP = (e) => {
      e.preventDefault();
      let text = newPostElement.current.value;
      //alert(text);
      props.addPost(text);
      newPostElement.current.value = '';
   }

   let postsElements = props.postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
   
   return (
      <div className={s.my__posts}>
         <div className={s.header}>My posts</div>
         {/* <div className={s.new__post}> */}
         <form action="#" className={s.new__post}>
            {/* <input
               // className={c.new__post}
               type="text"
               name="news"
               placeholder="your news..."
            /> */}
            <textarea ref={newPostElement} name="news" id="33" cols="30" rows="3"></textarea>
            <button onClick={addP} className={s.btn} type="submit">Send</button>
         </form>
         {/* </div> */}
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;