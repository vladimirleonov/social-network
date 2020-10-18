import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            <li className={s.dialog}>
               {/* <span></span> */}
               <NavLink to="/dialogs/1">Dimysh</NavLink>
            </li>
            <li className={s.dialog}>
               {/* <span></span> */}
               <NavLink to="/dialogs/2">Andrey</NavLink>
            </li>
            <li className={s.dialog}>
               {/* <span></span> */}
               <NavLink to="/dialogs/3">Valera</NavLink>
            </li>
            <li className={s.dialog}>
               {/* <span></span> */}
               <Navlink to="/dialogs/4">Sveta</Navlink>
            </li>
         </ul>
         <div className={s.messages}>
            <div className={s.wrapper}>
               <div className={s.descr}>
                  <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
                  <div className={s.name}>Dimysh</div>
               </div>
               <div className={s.message}>I am learn react</div>
            </div>
            <div className={s.wrapper}>
               <div className={s.descr}>
                  <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
                  <div className={s.name}>Me</div>
               </div>
               <div className={s.message}>Oh, good!</div>
            </div>
            <div className={s.wrapper}>
               <div className={s.descr}>
                  <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
                  <div className={s.name}>Me</div>
               </div>
               <div className={s.message}> I also wont to start learn react. I also wont to start learn react. I also wont to start learn react</div>
            </div>
            <div className={s.wrapper}>
               <div className={s.descr}>
                  <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
                  <div className={s.name}>Dimysh</div>
               </div>
               <div className={s.message}>You need to start</div>
            </div>
            <div className={s.wrapper}>
               <div className={s.descr}>
                  <img src="https://finewall.ru/upload/iblock/2df/2df64c2f9e005b8daf4bc10088c6eff7.png" alt="#" />
                  <div className={s.name}>Dimush</div>
               </div>
               <div className={s.message}>Y</div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;