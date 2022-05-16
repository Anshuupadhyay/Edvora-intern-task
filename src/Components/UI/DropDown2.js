import React, { Component } from "react";
import axios from "axios";



class CardContainer2 extends Component {
  state = {
    display: "",
    cities: [],
   
  };
  componentDidMount = (e) => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) =>
      this.setState({
        cities: response.data.map(({ state }) => state),
        display:
          response.data[Math.floor(Math.random() * response.data.length)].state
      }) 
    );
  };

  render() {
    const { display, cities } = this.state;
    let dropdownHandler = (ele)=>{
        console.log(ele.target.value);
      //  this.selectedCity=ele.target.value;
    }
     let onClickHandler=(ele)=>{
      let stateData=ele;
      console.log(stateData);
    }
    let key=0;
    return (
      <div className="container">
        <select defaultValue={display} onChange={dropdownHandler}>
          {cities.map((city) => (
            <option onClick={onClickHandler} key={city+key++} value={city}>
           {city}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default function DropDown() {
  return (
    <div className="App">
      
      <stateData/>
      <CardContainer2 />
    </div>
  );
}
