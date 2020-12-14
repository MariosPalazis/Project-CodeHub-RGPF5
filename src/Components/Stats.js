import React from "react";


const Stats=()=>{
    
  const [statsData, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/stats')
    .then(res=>res.json)
    .then(res=>{
      setData(res);
    })
    .catch(e=>{
      console.log(e);
    })
  });


}

export default Stats