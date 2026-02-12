import { useState } from "react";

const UseStateBasics = () => {

  // console.log(useState('hello world'));

  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  // console.log(value, handler);

  const [text, setText] = useState('random title');

  const handleClick = () => {
    
    if (text === 'random title') {
      setText('Hello Baby');
    } else {
      setText('random title');
    }
  }

  return (
    <div>
      <h3>{text}</h3>
      <button className='btn' onClick={handleClick}>
        change text
      </button>
    </div>
  );
};

export default UseStateBasics;
