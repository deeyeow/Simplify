import React from 'react';
import './ButtonToggle.css';

/* controlled component philosophy */
const ButtonToggle = ({checked, onChange}) => {
    return (
        <div class="toggle-btn" id="_1st-toggle-btn">
            <input 
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            <span></span>
        </div>
    );
}

export default ButtonToggle;