import React from 'react'
import { setLocalStorage } from '../../utilities/localStorage';

const Header=(props)=>{
   // const [username,setUsername] = useState('')
   // if(!data){
   //    setUsername('Admin')
   // }
   // else{
   //    setUsername(data.firstName);
   // }  
   const handleLogout = () => {
      localStorage.setItem('loggedInUser','');
      props.changeUser('');
      // window.location.reload();
   };

   return(
    
   <div className='flex items-end justify-between '>
    <h1 className='text-2xl' >Hello <br/><span className='text-3xl font-semibold'>username</span></h1>
    <button onClick={handleLogout} className='border-2 bg-red-500 text-white px-3 py-2' >Log Out</button>
   </div>
    
   )}

export default Header