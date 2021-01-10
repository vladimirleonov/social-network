import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
   // debugger;
   
   const newPostElement = React.createRef();

   let addPost = () => { 
      props.addPost();
   }

   let changePost = () => { 
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   let postsElements = props.state.profilePage.postData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>) 
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
            <textarea ref={newPostElement} onChange={changePost} value={props.state.profilePage.newPostText}
               name="news" id="33" cols="30" rows="3"></textarea>
            <button onClick={addPost} className={s.btn} type="button">Send</button>
         </form>
         {/* </div> */}
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;