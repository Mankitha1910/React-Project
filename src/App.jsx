import React, { useState } from 'react'
import greetingCards from './Data'

function App(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
  
    <div class="card">
      <div class="card-body">
      <div class="card-title"><h2>{props.item.name}</h2></div>
      <section class="card-details">
        <div>
        <p>Type: {props.item.type}</p>
        <p>Colors: {props.item.colors}</p>
        <p>Seller: {props.item.seller}</p>
        </div>
        <img src={props.item.img} alt="Fashion Greeting Card" className='img'></img>
      </section>
      
      <div class="card-price">
          <button onClick={() => setLikes(likes + 1)} className='icon-btn like'>❤️ {likes}</button>
          <span className='price-text' > Price: {props.item.price} </span>
          <button onClick={() => setDislikes(dislikes + 1)} className='icon-btn dislike'>👎 {dislikes}</button>
        </div>
    </div>
    </div>

  );
}

export default App
