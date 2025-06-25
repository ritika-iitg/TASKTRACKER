import React,{useState} from 'react'


const Login=({handleLogin})=>{
    
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     
    const submitHandler=(e)=>{
    e.preventDefault();
      handleLogin(email,password);
         setEmail('');
         setPassword('');          
    }
    
   return(
 <div className='flex h-screen w-screen items-center justify-center bg-grey-500 '>
<div className='border-2 border-teal-500  px-10 py-5 bg-neutral-300 rounded-3xl'>
   <form
   onSubmit={(e)=>{
       submitHandler(e);
    }}
   className='bg-#ffffff  flex flex-col '>
    <input 
    value={email}
    onChange={(e)=>{
        setEmail(e.target.value);
    }}
    required className='text-black outline-none  border-2  border-teal-500  bg-white bg- text-xl px-20 py-5 rounded-full placeholder:text-black '  type="email" placeholder="EMAIL ADDRESS "/>
    <input value={password}
    onChange={(e)=>{
        setPassword(e.target.value);
    }}
    required className='text-black outline-none  mt-4 border-2  border-teal-500 bg-white bg- text-xl px-20 py-5 rounded-full placeholder:text-black ' type="Password" placeholder=" Enter Password "/>
    <button className='text-black outline-none  mt-4 border-2 bg-teal-600 bg- text-xl px-20 py-5 rounded-full placeholder:text-black '>Log in</button>
   </form>
</div>
 </div>


)
}
export default Login