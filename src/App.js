import React from 'react';
import logo from './logo.svg';
import './App.css';

const customers = [
  {
      id: 1,
      name: "Kristóf",
      favouriteProducts: [
      {
          category: "tv",
          color: "white"
      },
      {
        category: "tv",
        color: "white"
    }
  ]
  },

  {
      id: 2,
      name: "Ferenc",
      favouriteProducts: [
          {
              category: "headphone",
              color: "black"
          }
      ]
  }
]

function App() {
  
  return (
  <div>
    <ul>
      {customers.map((customerObject) => (
      <li key={customerObject.id} >
        <strong>{customerObject.name}</strong>
        
        {customerObject.favouriteProducts.map((favProductObject) => (
  <div key={favProductObject.category}>
    <p>{favProductObject.category}</p>
    <p>{favProductObject.color}</p>
  </div>
  ))}
        
      </li>
    ))}
    
    </ul>

    
  </div>
  )
}

export default App;
