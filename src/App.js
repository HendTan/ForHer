import React from 'react';
import ImageCar from './component/Carousel'
import StrContent from './component/Words'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <ImageCar />
      <StrContent />
    </div>
  );
}

export default App;
