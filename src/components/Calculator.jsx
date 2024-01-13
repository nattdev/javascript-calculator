import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {

    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("0");

    const inputData = (data) => {
        input == "0" ? setInput(data) : setInput(input + data);
    }

    return (
        <div className="calculator-wrapper">
            <Display input={input} output={output}/>
            <Buttons inputData={inputData} setInput={setInput} input={input} setOutput={setOutput}/>
        </div>
    )
}

export default Calculator;