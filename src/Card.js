import React from 'react';
import './Card.css'

const card = (props) => {
  return (
    <div className='card_container'>
      <div className='card'>
        <button onClick={props.removeCard} className='cancel'>X</button>
        <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
        <h3>{props.name}</h3>
        <div className='buttons'>
          <button onClick={props.removeLikes}>👎</button>
          {props.likes >= 0 ? <p className='likes'>❤️{props.likes}</p> : <p className='likes'>💔{props.likes}</p>}
          <button onClick={props.addLikes}>👍</button>
        </div>
      </div>
    </div>
  );
};

export default card;