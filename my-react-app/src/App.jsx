import React, { useState } from 'react';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState("");
    const [previousValue, setPreviousValue] = useState("");
    const [operator, setOperator] = useState(null);

    const handleDigitClick = (digit) => {
        setInputValue(inputValue + digit);
    };

    const handleOperatorClick = (op) => {
        setPreviousValue(inputValue);
        setInputValue("");
        setOperator(op);
    };

    const handleEqualClick = () => {
        if (operator) {
            switch (operator) {
                case "+":
                    setInputValue((parseFloat(previousValue) + parseFloat(inputValue)).toString());
                    break;
                case "-":
                    setInputValue((parseFloat(previousValue) - parseFloat(inputValue)).toString());
                    break;
                case "*":
                    setInputValue((parseFloat(previousValue) * parseFloat(inputValue)).toString());
                    break;
                case "/":
                    setInputValue((parseFloat(previousValue) / parseFloat(inputValue)).toString());
                    break;
                default:
                    break;
            }
            setPreviousValue("");
            setOperator(null);
        }
    };

    const handleClear = () => {
        setInputValue("");
        setPreviousValue("");
        setOperator(null);
    };

    return (
        <div className="App">
            <div className="display">{inputValue || "0"}</div>
            <div className="buttons">
                {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "="].map(button => (
                    <button key={button} 
                    className={button === "=" ? "equals" : ""}
                    onClick={() => {
                        if ("0123456789.".includes(button)) {
                            handleDigitClick(button);
                        } else if ("+-*/".includes(button)) {
                            handleOperatorClick(button);
                        } else if (button === "=") {
                            handleEqualClick();
                        }
                    }}>{button}</button>
                ))}
                <button onClick={handleClear}>C</button>
            </div>
        </div>
    );
}

export default App;
