function Display({output}) {
    return (
        <div className="display-wrapper">
            <p className="input-screen">input</p>
            <p className="output-screen" id="display">{output}</p>
        </div>
    )
}

export default Display;