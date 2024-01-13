function Button({id, text, outputData}) {

    const handleOnClick = () => {
        console.log(text);
        outputData(text);
    }


    return (
        <button id={id} className="button" onClick={handleOnClick}>{text}</button>
    )
}

export default Button;