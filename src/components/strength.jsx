import React from 'react';
import './strength.css';
const passwordStrength = (password) => {
    const getPasswordStr = () => {
        // Tells that if your password is strong or not based on the length of the password
        // like if the password is less than 6 characters then it is very weak because guessing your password is very easy
        // if the password is less than 8 characters then it is weak because it is still easy to guess
        // if the password is less than 10 characters then it is medium because it is not easy to guess
        // if the password is less than 12 characters then it is strong because it is hard to guess
        // if the password is greater than 12 characters then it is very strong because it is very hard to guess
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