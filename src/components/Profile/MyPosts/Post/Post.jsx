import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
         <div className={s.descr}>
            <span className={s.text}>{props.message}</span>
            <span className={s.like}>{props.likeCount}</span>
         </div>
      </div>
   )
}

export default Post;


