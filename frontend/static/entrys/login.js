import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

// function MyApp() {
//     return (
//         <div>
//             <h1>Welcome to my app</h1>
//         </div>
//     );
// }
// // Comment
// function MyButton() {
//     const [count, setCount] = useState(0);
  
//     function handleClick() {
//       setCount(count + 1);
//     }
  
//     return (
//       <button onClick={handleClick}>Clicked {count} times</button>
//     );
// }


// function MyComponent({name, age, children}){
//     return ( 
//         <h2>
//             Hello from React!, {name} {age} {children}
//         </h2>
//     );
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<MyComponent name={'Vinicius'} age={25} children={5} />);
// console.log(root);




function InputField({ label, type, name, value, onChange }) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} />
        </div>
    );
}


function SubmitButton() {
    return <button type="submit">Login</button>;
}

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <SubmitButton />
        </form>
    );
}


const root = createRoot(document.getElementById('root'));
root.render(<LoginForm />);