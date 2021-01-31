import React from 'react';
import s from './FindUsers.module.css';
import User from './User/User.jsx';

const FindUsers = (props) => {
   
   if (props.usersData.length === 0) { 
      props.onSetUsers(
         [
            { id: 1, followed: true, fullName: 'Gleb Lavrov', status: "I'm looking for a job", location: { country: 'Belarus', city: 'Minsk' } },
            { id: 2, followed: false, fullName: 'Alex Tarasov', status: "I'm looking for a job", location: { country: 'Russia', city: 'Moscov' } },
            { id: 3, followed: true, fullName: 'Gleb Lavrov', status: "I'm looking for a job", location: { country: 'Ukrain', city: 'Kiev' } }
         ]
      )
   }
   
   const users = props.usersData.map(u => <User id={u.id} key={u.id} followed={u.followed} fullName={u.fullName} status={u.status} country={u.location.country} city={u.location.city} onFollow={props.onFollow} onUnfollow={props.onUnfollow}/>)

   const showMore = () => {
      console.log('Hi');
   }
   
   return (
      <div className={s.container}>
         <ul className={s.users__wrapper}>
            {users}
            {/* < UserContainer fullName='Gleb Lavrov' status="I'm looking for a job right now..." country='Belarus' city='Minsk' />
            < UserContainer fullName='Alex Tarasov' status="I'm looking for a job right now..." country='Belarus' city='Minsk' />
            < UserContainer fullName = 'Ivan Savin' status = "I'm looking for a job right now..." country='Belarus' city='Minsk' /> */}
         </ul>
         <button onClick={showMore} className={s.button}>Show more</button>
      </div>
   )
}

export default FindUsers;