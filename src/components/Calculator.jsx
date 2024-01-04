import Buttons from "./Buttons";
import Display from "./Display";

function Calculator() {
    return (
        <div className="calculator-wrapper">
            <Display />
            <Buttons />
        </div>
    )
}

export default Calculator;