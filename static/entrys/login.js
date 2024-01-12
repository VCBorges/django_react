import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
        </div>
    );
}
// Comment
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>Clicked {count} times</button>
    );
}


function MyComponent({name, age, children}){
    return ( 
        <h2>
            Hello from React!, {name} {age} {children}
        </h2>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<MyComponent name={'Vinicius'} age={25} children={5} />);
console.log(root);