import React from 'react';
import Card from '../UI/Card'
import Search from '../UI/Search'
import './pages.css'

const Animals = (props) => {
  const searchFilter = props.data.filter(animal => {
    return animal.name.includes(props.searchInput)
  })
  const type = props.type;
  return (
    <div>
      <h2>{type === 'animals' ? 'Birds' : 'Animals'} {props.data.length}</h2>
      <div className='search'>
        <Search searchHandler={props.searchHandler} />
      </div>
      <div className='animal_grid'>
        {searchFilter.map((item) => <Card
          key={item.name}
          name={item.name}
          likes={item.likes}
          removeCard={() => props.removeHandler(item.name)}
          addLikes={() => props.likesHandler(item.name, 'add')}
          removeLikes={() => props.likesHandler(item.name, 'remove')} />)}
      </div>
    </div>
  );
};

export default Animals;