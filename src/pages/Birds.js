import React from 'react';
import Card from '../UI/Card';
import Search from '../UI/Search';
import './pages.css';

const Birds = (props) => {
  const searchFilter = props.data.filter(item => {
    return item.name.includes(props.searchInput)
  })
  const type = props.type;
  return (
    <div>
      <h2>{type === 'animals' ? 'Animals' : 'Birds'} {props.data.length}</h2>
      <div className='search'>
        <Search searchHandler={props.searchHandler} />
      </div>
      <div className='animal_grid'>
        {searchFilter.map((item) => <Card key={item.name}
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