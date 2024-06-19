import React from 'react';
import './strength.css';
const passwordStrength = (password) => {
    const getPasswordStr = () => {
        const passwordLength = password.length;

        if(passwordLength < 1) {
            return "";
        } else if(passwordLength < 6) {
            return "very weak";
        }
        else if(passwordLength < 8) {
            return "weak";
        }
        else if(passwordLength < 10) {
            return "medium";
        }
        else if(passwordLength < 12) {
            return "strong";
        } else {
            return "very strong";
        }
    };
    const passwordStrength = getPasswordStr();
    if(!passwordStrength) {
        return <React.Fragment/>;
    }
    return (
        <div className="password-strength">
            Password Strength: <span style={{fontWeight: "bold"}}>
            {passwordStrength}</span>
        </div>
    );
};

export default passwordStrength;