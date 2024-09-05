/*
Use the following API and show the Product Name, Description and Image in tabular format. Use CSS to make it visually appealing.*/
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(res=>{
      console.log("res", res)
      setData(res.products);
    })
    .catch(err=>{
      //
    })

  },[])

  return (
    <div className="App">
      <h1>React Assignement</h1>
      <table className='styled-table'>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {
        data && data.map((el,i)=>
          (<tr key={i+el.title}>
            <td>{el.title}</td>
            <td>{el.description}</td>
            <td><img src={el.images[0]} alt={el.description} height={50} width={50}/></td>
          </tr>)
        )
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
