import React, {useEffect, useState} from "react";
import './home.css';
import axios from 'axios';

export const Home = () => {
  const [statsData, setData] = useState([]);
  const [latestC, setLatest] = useState([]);
  //Stats
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/stats',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

//Table
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'http://localhost:3000/courses',
    );

    setLatest(result.data);
  };

  fetchData();
}, []);



  return(
      <div>
        <div className="Main">
            <div className="content">
              <h3>Welcome to Code.Hub Dashboard!</h3>
              <h5>Manage everything and have fun!</h5>
            </div>
        </div>
        <br/>
        <div class="d-flex flex-row justify-content-center">
            {statsData?.map((item) => (
              <div class="p-2" className="stat"><h6>{item.title.toUpperCase()}: {item.amount}</h6></div>
            ))}
        </div>
        <br/>


        <div>
          <table class="table" style={{"width":"90%", "marginLeft":"5%"}}>
            <thead>
              <tr style={{backgroundColor: "WhiteSmoke"}}>
                <td colSpan="6"><p className="labelT">Last 5 Courses</p></td>
              </tr>
              <tr>
                <th></th>
                <th scope="col">Title</th>
                <th scope="col">Bookable</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {latestC.slice(0,5)?.map((item) => (
                <tr>
                  <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IGiVjiUf5KXGtBekPtr8SjbSvJm1rF6a8A&usqp=CAU" alt="info" width="27" height="27" /></td>
                  <td>{item.title}</td>                  
                  <td><img src={item.open? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3OZt24Czl2n2z-mg4eGK6pc6hx56jTBpFg&usqp=CAU": "data:image/jpeg;base64,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"}
 alt="info" width="27" height="27" /></td>
                  <td>{item.price.normal} €</td>
                  <td>{item.dates.start_date} - {item.dates.end_date}</td>
                  <td><a href={"/Courses/"+item.id} class="btn btn-primary">View details</a></td>
                </tr>
              ))}
              <tr>
                <td colSpan="6"><a href="/Courses" class="btn btn-primary" style={{marginLeft:"90%"}}>View</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );

}
export default Home;
