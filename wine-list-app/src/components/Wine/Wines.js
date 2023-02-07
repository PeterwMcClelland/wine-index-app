import React, { useEffect, useState } from 'react'
import axios from 'axios';
const URL = "http://localhost:3000/books"; 
 

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data);
};

 const Wines = () => {
     const [wines, setWines] = useState();
  useEffect(() => {

    fetchHandler().then(data=>setWines(data.wines));
  }, []);
  console.log(wines);
  
  return <div>
      <ul>
          {wines && wines.map((wine, i) =>(
          <div key={i}>
            <Books />
              </div>
          ))} 
      </ul>
  </div>;
};

export default Wines;