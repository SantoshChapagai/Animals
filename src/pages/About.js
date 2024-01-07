import React, { useEffect } from 'react';
// import axios from 'axios';
import './pages.css'

const About = () => {
  // const [data, setData] = useState();
  useEffect(() => {
    // axios.get('http://localhost:8004/event')
    //   .then(res => console.log(res.data));
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
  return (
    <div className='list'>

      <h1>Very cool app</h1>
      <h2>Animals and Birds page</h2>
      <p>Show love to your favorite animals and birds.</p>
    </div>
  );
};

export default About;