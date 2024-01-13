function Display({input, output}) {
    return (
        <div className="display-wrapper">
            <p className="input-screen" id="display">{input}</p>
            <p className="output-screen">{output}</p>
        </div>
    )
}

export default Display;