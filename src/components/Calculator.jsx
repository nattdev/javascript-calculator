import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {

    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("0");
    const [isEqual, setIsEqual] = useState(false);

    let lastIndexOperation = Math.max(
        input.lastIndexOf("+"),
        input.lastIndexOf("-"),
        input.lastIndexOf("*"),
        input.lastIndexOf("/")
    );

    const calculate = (e) => {
        const result = String(eval(input));

        setInput(result);
        setIsEqual(true);
        setOutput(result);
    }

    const handleOperation = (e) => {
        const data = e.target.innerText;
        const lastChar = input[input.length - 1]
        const myRegex = /[+\-*\/]/;

        if (!myRegex.test(lastChar)) {
            setInput(input + data)
        } else {
            if (lastChar != "-" && data == "-") {
                setInput(input + data)
            } else if (data !== "-" && lastChar == "-") {
                setInput(input.slice(0, -2) + data);
            }
        }

        setOutput(data);
        setIsEqual(false);
    }

    const handleDecimal = (e) => {
        const data = e.target.innerText;

        if (input.includes(".", lastIndexOperation) == true) {
        } else {
            setInput(input + data);
        }

        setIsEqual(false);
    }

    const handleNumber = (e) => {
        const data = e.target.innerText;

        if (!isEqual) {
            if (input == "0") {
                setInput(data);
            } else {
                setInput(input + data);
            }
            output != "0" ?
                setOutput(input.slice(lastIndexOperation + 1, input.length) + data) : setOutput(data);
        } else {
            setInput(data);
            setOutput(data);
        }

        if (input[input.length - 1] == "0" && input.length > 1 && (/[0-9]/.test(data)) && /[+\-*\/]/.test(input[input.length - 2])) {
            const updateInput = input.slice(0, -1)
            setInput(updateInput + data);
        }

        setIsEqual(false);
    }

    const clear = (e) => {
        setInput("0");
        setOutput("0");
        setIsEqual(false);
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold">REACT.JS CALCULATOR</h1>
            </header>
            <div className="calculator-wrapper flex flex-col items-center align-center bg-amber-100">
                <Display input={input} output={output} />
                <Buttons handleNumber={handleNumber} handleDecimal={handleDecimal} handleOperation={handleOperation} clear={clear} calculate={calculate} />
            </div>
        </div>
    )
}

export default Calculator;