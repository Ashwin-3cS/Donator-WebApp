import React ,{useState} from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {

  const [email , setEmail] =useState('');
  const [password, setPassword]=useState('');
  const navigate=useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,email,password);
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
    <div className=' flex flex-col	items-center justify-center	 text-center	h-screen  signup  '>
    <div className='login_container'>
      <h1 className='logo 	 '>BEING HUMAN</h1>
      <form onSubmit={handleSubmit} className="signup-form">
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

          <button type="submit" className='signup-button '>Signup</button>

          <hr/>
          

      </form>
    


      <p className="">Need to Login ? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Signup;