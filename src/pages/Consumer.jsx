
// import React from 'react';
// import NavBar from '../components/NavBar';

// const Consumer = () => {
//   return (
//     <div>
//       <h2>Consumer Page</h2>
//       <NavBar/>
     
//     </div>
//   );
// };

// export default Consumer;




import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Consumer = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className='consumer'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>hi consumer</h1>
      </div>

    </div>
  );
};

export default Consumer;

