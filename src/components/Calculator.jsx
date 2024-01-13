import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {

    const [output, setOutput] = useState("");

    const outputData = (data) => {
        setOutput(output + data);
    }

    return (
        <div className="calculator-wrapper">
            <Display output={output}/>
            <Buttons outputData={outputData}/>
        </div>
    )
}

export default Calculator;