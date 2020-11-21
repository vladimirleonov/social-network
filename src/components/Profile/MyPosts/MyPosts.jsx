import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.css'



const MyPosts = (props) => {
   
   const newPostElement = React.createRef();

   let addP = () => {
      //alert(text);
      props.store.addPost();
      //props.updateNewPostText('');
   }

   let onCP = () => {
      
      let text = newPostElement.current.value;
      //console.log(text);
      props.store.updateNewPostText(text);
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
            <textarea ref={newPostElement} onChange={onCP} value={props.newPostText}
               name="news" id="33" cols="30" rows="3"></textarea>
            <button onClick={addP} className={s.btn} type="button">Send</button>
         </form>
         {/* </div> */}
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;