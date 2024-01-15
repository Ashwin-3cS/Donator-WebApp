
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
      <div >
        <h1 className='mt-[200px]'>Consumer Page</h1>
      </div>

    </div>
  );
};

export default Consumer;

