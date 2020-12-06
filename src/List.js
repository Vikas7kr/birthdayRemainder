import React ,{useState}from 'react';
import {data} from "./data";
import  './List.css';

const List = () => {
const [people, setpeople] = useState(data)
const removePerson=(id)=>{
  let newPeople=people.filter((person)=> person.id !== id)
  setpeople(newPeople)
}
    return (
        <React.Fragment>
            <h2>{people.length} birthday's today</h2>
            {people.map((person)=>{
                
                const {id,name,age,image}=person;
                return<div key={id} className='person'>
                    <img src={image} alt={name}/>
                    <h3 style={{textTransform:'capitalize'}}>{name}</h3>
                    <h4 style={{fontWeight:'none',color:'gray'}}>{age} years</h4>
                    <button onClick={()=>removePerson(id)} className='Dbutton'>Delete</button>
                </div>
            })}
            <button onClick={()=>setpeople([])} className='Cbutton'>CLEAR ALL</button>
        </React.Fragment>
    )
}

export default List;