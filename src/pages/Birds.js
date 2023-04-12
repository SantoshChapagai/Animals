import React from 'react';
import Card from '../UI/Card';
import Search from '../UI/Search';
import './Animals.css';

const Birds = (props) => {
  const birdsFilter = props.data.filter(bird => {
    return bird.name.includes(props.searchInput)
  })
  return (
    <div>
      <h2>Birds</h2>
      <h3>{birdsFilter.length}</h3>
      <div className='search'>
        <Search searchHandler={props.searchHandler} />
      </div>
      <div className='animal_grid'>
        {birdsFilter.map((item) => <Card key={item.name}
          name={item.name}
          likes={item.likes}
          removeCard={() => props.removeHandler(item.name)}
          removeLikes={() => props.likesHandler(item.name, 'remove')}
          addLikes={() => props.likesHandler(item.name, 'add')} />)}
      </div>
    </div>
  );
};

export default Birds;