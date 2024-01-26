import React from 'react';

export function BaseInput({ label, type, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
                className="form-control" 
                type={type} 
                id={name} 
                name={name} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}