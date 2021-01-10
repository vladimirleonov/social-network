import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

   let state = props.store.getState();

   let onAddPost = () => { 
      props.store.dispatch(addPostActionCreator());
   }

   let onChangePost = (text) => { 
      props.store.dispatch(updateNewPostTextActionCreator(text));
   }

   return (
      <MyPosts state={state} addPost={onAddPost} updateNewPostText={onChangePost}/>
   )
}

export default MyPostsContainer;