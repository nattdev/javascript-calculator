import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {

    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("0");

    const inputData = (data) => {

        let indexOperation = Math.max(
            input.lastIndexOf("+"),
            input.lastIndexOf("-"),
            input.lastIndexOf("*"),
            input.lastIndexOf("/")
        );
    
        let firstIndex = Math.max(
            input.indexOf("+"),
            input.indexOf("-"),
            input.indexOf("*"),
            input.indexOf("/")
        );

        input == "0" ? 
        setInput(data) : 
        data == "*" || 
        data == "/" || 
        data == "+" ? 
        (input.slice(-1) == "*" || 
        input.slice(-1) == "/" ||
        input.slice(-1) == "+" || 
        input.slice(-1) == "-") ?
        indexOperation != firstIndex ? 
        setInput(input.replace(input.slice(firstIndex - 1, indexOperation + 1), data)) :
        setInput(input.replace((input.slice(-1)), data)) : setInput(input + data) : 
        setInput(input + data);

        data == "+" || data == "-" ? setOutput(data) : 
        output == "0" ? 
        setOutput(data) : 
        setOutput(input.slice(indexOperation + 1, input.length) + data) ;
    }

    return (
        <div className="calculator-wrapper">
            <Display input={input} output={output}/>
            <Buttons inputData={inputData} setInput={setInput} input={input} setOutput={setOutput} output={output}/>
        </div>
    )
}

export default Calculator;