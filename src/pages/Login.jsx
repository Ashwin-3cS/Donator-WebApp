// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login;


import React ,{useState} from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {

  const [email , setEmail] =useState('');
  const [password, setPassword]=useState('');
  const navigate=useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token',user.accessToken);
      localStorage.setItem('user',JSON.stringify(user));
      navigate("/");

    }catch(error){
      console.error(error);
    }
  }
  
  

  return (
    <div className=' flex flex-col	items-center justify-center	 text-center	h-screen	login  ' >
      <h1 className='logo  mb-[8px] mr-[4px] text-3xl		'>BEING HUMAN</h1>
      <form onSubmit={handleSubmit} className="login-form">
          <input className=" phSignupLogin placeholder:italic placeholder:text-slate-50 block  w-full border border-cyan-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="email"
            placeholder='Your Email'
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input className=" phSignupLogin placeholder:italic placeholder:text-slate-50 block  w-full border border-cyan-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="password"
            placeholder='Your Password'
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit" className='login-button  '>Login</button>
          <hr/>
      </form>

      <p className="mt-[3px]">Need to Signup ? <Link className="text-cyan-600 "  to="/signup">Create Account</Link></p>
    </div>
  )
}

export default Login;

