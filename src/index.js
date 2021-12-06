import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {buttonText, clickButton} = props;
  return <button onClick={clickButton}>{buttonText}</button>;
  // your code here
};

const Application = () => {

  const [name, setName] = useState('');
  // your code here

  const reset = () => {
    setName('');
    // your code here
  };

  return (
    <main>
      <input placeholder="Type your name" value = {name} onChange={(event) => setName(event.target.value)}/>
      <Button buttonText={"RESET"} clickButton={reset}/>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
