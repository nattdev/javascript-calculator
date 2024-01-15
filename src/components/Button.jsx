function Button({ id, text, inputData, setInput, input, setOutput, output}) {

    const handleOnClick = () => {
        console.log(text);
        if (text == "=") {
            let indexOperation = Math.max(
                input.lastIndexOf("+"),
                input.lastIndexOf("-"),
                input.lastIndexOf("*"),
                input.lastIndexOf("/")
            );

            if (input[indexOperation + 1] == "0" && input.includes(".", indexOperation) == false) {
                let numberOld = input.slice(indexOperation + 1, input.length);
                let number = String(Number(numberOld));
                let updateInput = input.replace(numberOld, number);
                let result = String(eval(updateInput));
                setInput(result);
                setOutput(result);
            } else {
                let result = String(eval(input));
                setInput(result);
                setOutput(result);
            }
        } else if (text == "AC") {
            setInput("0");
            setOutput("0");
        } else if (
            text == "+" ||
            text == "-" ||
            text == "*" ||
            text == "/" ||
            text == "."
        ) {
            let indexOperation = Math.max(
                input.lastIndexOf("+"),
                input.lastIndexOf("-"),
                input.lastIndexOf("*"),
                input.lastIndexOf("/")
            );
            if (
                input.slice(-1) == text ||
                input.slice(-1) == "."
            ) {
            } else {
                if (text == ".") {
                    if (input.includes(".", indexOperation) == true) {
                    } else {
                        inputData(text);
                    }
                } else {
                    inputData(text);
                }
            } 
            
            if (input[indexOperation + 1] == "0" && input.includes(".", indexOperation) == false) {
                let numberOld = input.slice(indexOperation + 1, input.length);
                let number = String(Number(numberOld));
                let updateInput = input.replace(numberOld, number);
                setInput(updateInput + text);
            } 
        } else if (text == "0") {
            let indexOperation = Math.max(
                input.lastIndexOf("+"),
                input.lastIndexOf("-"),
                input.lastIndexOf("*"),
                input.lastIndexOf("/")
            );
            if (input[indexOperation + 1] == "0") {
                if (input[indexOperation + 2] != "0" && input[indexOperation + 2] != undefined) {
                    inputData(text);
                }
            } else {
                if (input[indexOperation + 1] == "0") {
                } else {
                    inputData(text);
                }
            }
        } else {
            inputData(text);
        }
    }

    return (
        <button id={id} className="button" onClick={handleOnClick}>{text}</button>
    )
}

export default Button;