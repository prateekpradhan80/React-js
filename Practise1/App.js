 import React , {useState} from 'react';
import './App.css';
import ItemList from './ItemList';


function App() {
  const [items,setItems]=useState(['items1','items2','items3'])
  return (
    <div className="App">
       <h1>React Beginner</h1>
       <ItemList items={items} />
    </div>
  );
}

export default App;
