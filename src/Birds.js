import React from 'react';
import Card from './Card';
import Search from './Search';
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
        {birdsFilter.map(item => <Card key={item.name} name={item.name} likes={item.likes} removeCard={() => props.removeHandler(item.name)} addLikes={() => props.likeHandler(item.name, 'add')} removeLikes={() => props.likeHandler(item.name, 'remove')} />)}
      </div>
    </div>
  );
};

export default Birds;