import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState, useReducer } from 'react';

function BaseInput({ label, type, name, value, onChange }) {
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`)
        fetch('http://127.0.0.1:8000/users/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({ username: email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <BaseInput
                label="Email"
                type="text"
                name="username"
                value={email}
                onChange={handleChange}
            />
            <BaseInput
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <SubmitButton />
        </form>
    );
}


const root = createRoot(document.getElementById('root'));
root.render(<LoginForm />);