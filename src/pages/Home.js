import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import './Birds'
const Home = () => {
  return (
    <div className='card_container'>
      <Link to="/animals"><div className='holder animals'>
        <h2>Animals</h2>
      </div>
      </Link>
      <Link to="/birds"><div className='holder birds'>
        <h2>Birds</h2>
      </div>
      </Link>
    </div>
  );
};

export default Home;