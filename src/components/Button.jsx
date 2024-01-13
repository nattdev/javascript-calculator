function Button({ id, text, inputData, setInput, input, setOutput }) {

    const handleOnClick = () => {
        if (text == "=") {
            console.log("es igual");
            setOutput(eval(input));
        } else if (text == "AC") {
            setInput("0");
            setOutput("0");
        } else if (text == "+" || text == "-" || text == "x" || text == "/" || text == ".") {
            if (input.slice(-1) == "+" || input.slice(-1) == "-" || input.slice(-1) == "x" || input.slice(-1) == "/" || input.slice(-1) == ".") {
                console.log("repeat");
            } else {
                if (text == ".") {
                    let indexOperation = Math.max(input.lastIndexOf("+"), input.lastIndexOf("-"), input.lastIndexOf("x"), input.lastIndexOf("/"));
                    if (input.includes(".", indexOperation) == true) {
                        console.log("Repetido");
                    } else {
                        inputData(text);
                    }
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