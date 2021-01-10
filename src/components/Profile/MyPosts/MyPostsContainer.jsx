import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let state = store.getState();

               let onAddPost = () => { 
                  store.dispatch(addPostActionCreator());
               }

               let onChangePost = (text) => { 
                  store.dispatch(updateNewPostTextActionCreator(text));
               }

               return (
                  <MyPosts state={state} addPost={onAddPost} updateNewPostText={onChangePost}/>
               )
            }
         }
      </StoreContext.Consumer>
   )

}

export default MyPostsContainer;