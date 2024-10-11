import React, { useState } from 'react';
import './App.css';
import './components/shopping.css'
import AppHeader from './components/header';
import Shopping from './components/shopping';
import Post from './components/post';
import shops from './data/shops';



function App() {
  const [selectedShop, setSelectedShop] = useState(null);
  // const [searchText, setSearchText] = useState('');

  function showImageClick(shop){
    setSelectedShop(shop);
  }

  function closeImageClick(){
    setSelectedShop(null);
  }

  // const filteredShop = shops.filter((shop) => {
  //   return shop.title.includes(searchText);
  // });
  const shopElement = shops.map((shop, index) => {
    return <Shopping key={index} shop={shop} showShop={showImageClick} />;
  });

  let shopPost = null;
  if(!!selectedShop){
    shopPost = <Post shop={selectedShop} onBgClick={closeImageClick} />
  }

  return (
    <div className="App">
      <AppHeader />
      
      <div className="shopping">
        {shopElement}
      </div>
      {shopPost}
    </div>
  );
}

export default App;
