import React,{useState,useEffect} from 'react' 
import profile from  "../Images/bp.jpeg"
import Data from './Data'
import Card from './Card'
import DataUser from './DataUser'
import DropDown from "./DropDown";
import DropDown2 from './DropDown2'
import './Ui.css'

const Ui=()=>{
    const [item, setItem] = useState(Data);
   
    
    useEffect(()=>{var myData=async()=>{
        console.log('running');
        var response =await fetch("https://assessment.api.vweb.app/rides");
        const data =await response.json();
        setItem(item=>[...data]);
        };myData();},[]);

    const [item2, setItem2] = useState(DataUser);

    useEffect(()=>{var myData=async()=>{
        console.log('running');
        var response =await fetch("https://assessment.api.vweb.app/user");
        const data2 =await response.json();
        console.log(item2);
        setItem2(pre=>data2);
         };myData();
},[]);




return (
    <div className="Whole">
        <div className='Whole1'>
        <div className='txt'>
       Edvora
       </div>
       <div className="user_details">
           <table cellSpacing="4px">
           <tr>
               <td>{item2.name}</td>
               <td><img className='img1' src={item2.url} alt="Users profile"/></td>
               <br/>
               

           </tr>
           </table>
       </div>
       </div>
       <div className='Whole2'>
     
       <div class="container">
           <div className='drop'>
    <div className='drop1'>
      <DropDown/>
      </div>
      <div className='drop2'>
       <DropDown2/>
       </div>
       </div>

  <ul>
    <li class="one" id="uno"><a href="#uno">Nearest Rides</a></li>
 <li class="two" id="dos"><a href="#dos">Upcoming rides (4)</a></li>
 <li class="three" id="tres"><a href="#tres">Past rides (2)</a></li>
    <hr />
  </ul>
  <Card item={item} />

</div>
</div>
</div>
    

  
    
)
}
export default Ui;