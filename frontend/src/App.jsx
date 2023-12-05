import { useEffect, useState } from "react";
import axios from 'axios';
const App=()=>{
  const[jokes,setJokes]=useState([]);
  useEffect(()=>{
    getdata();
  })
 const getdata=()=>{
  axios.get("/api/jokes")
  .then((res)=>{
    console.log(res.data);
    setJokes(res.data)
  })
  .catch((error)=>{
    console.log(error);
  })
 }
  return(
    <>
    <h1>JOKES:{jokes.length}</h1>
    {
      jokes.map((joke,index)=>{
        return(<div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>)
      })
    }
    </>
  )
}
export default App;