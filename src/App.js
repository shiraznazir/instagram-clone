import React, { useState } from 'react';
import './App.css';
import img1 from './images/Instagram-Logo.png';
import Post from './Post';

function App() {

  const [ posts, setPosts ] = useState([
    {
      username="shahzadasaleem" ,
      caption="wow it's works" ,
      imageURl="./images/forest.jpg" 
    },
    {
      username="shiraznazir",
      caption="wow it's so wonderful",
      imageURl="./images/forest.jpg"
    },
    {
      username="farhatjahan",
      caption="wow it's so nice",
      imageURl="./images/forest.jpg"
    }
  ]);

  return (
    <div className="App">
        <div className="app__header">
          <img
            className="app__headerImage"
            src={ img1 }
            alt=""
            />
        </div>
        
        <h1>Hello guys we are going to build a instagram clone !</h1>
        <Post username="shahzadasaleem" caption="wow it's works" imageURl="./images/forest.jpg" />
        <Post username="shiraznazir" caption="wow it's so wonderful" imageURl="./images/forest.jpg"/>
        <Post username="farhatjahan" caption="wow it's so nice" imageURl="./images/forest.jpg"/>
        <Post username="Sohanpalsingh" caption="wow it's so nice" imageURl="./images/forest.jpg" />
        
    </div>
  );
}

export default App;
