import React from "react";
import  "./Card.css"

const Card = ({ item }) => {            
           // destructuring props
           let key=0;
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id+key++}
              >
                <div className="card">
                  <table>
<tr>
  <td>  <img className="imgh" src={Val.map_url} alt={Val.title}  /></td>
  <td>
  <p>Ride id: {Val.id}
  <br/>
 
  Origin_station: {Val.origin_station_code}
  <br/> 
  station_path: [{Val.station_path+" "} ]
  <br/>
  Date: {Val.date}</p>
  <div className="full">
    
   <div className="city">
    <td>{Val.city}</td>
    </div>
   <div className="state" >
     <td>{Val.state}</td>
   </div>
  
  
  </div>
  
 
  </td>
</tr>
 </table>
                  
               </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};


 
export default Card;