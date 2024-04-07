import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/gitub')
    .then((Response)=>{
      setJokes(Response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
    {jokes.map((value, index) => (
  <div style={{backgroundColor: value.color}} key={value.id}>
    <h1>{value.jokeTitle}</h1>
    <p>{value.joke}</p>
  </div>
))}
    </>
  )
}

export default App
