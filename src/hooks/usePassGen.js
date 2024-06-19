import { useState } from 'react';

const usePassGen = () => {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = (checkboxData, length) => {
        let charSet = "";
        let generatedPassword = "";

        const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);

        if (selectedOptions.length === 0) {
            setErrorMessage("please select at least one option or your device will explode!!!!😂💥");
            setPassword("");
            return;
        }
        selectedOptions.forEach((option) => {
            switch (option.title) {
                case "Uppercase":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Lowercase":
                    charSet += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Numbers":
                    charSet += "0123456789";
                    break;
                case "Symbols":
                    charSet += "!@#$%^&*()_+";
                    break;
                default:
                    break;
            }
        });

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }
        setPassword(generatedPassword);
        setErrorMessage("");
    };

    return { password, errorMessage, generatePassword };
};

export default usePassGen;
