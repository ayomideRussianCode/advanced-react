import { useState } from "react";
import {data} from '../../data';


const UseStateArray = () => {

  const  [people, setPeople] = useState(data);
  // const removeItem = (id) => {
  //   let newPeople = people.filter((person)=> person.id !== id)
  //   setPeople(newPeople)
  // }

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id
      );
    return newPeople;
    });}
  return (
    <div>
      {people.map((person)=> {
        const {id, name} = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={()=> removeItem(id)}>Remove Item</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>Delete Items</button>
    </div>
  );
};

export default UseStateArray;
