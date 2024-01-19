function Button({ id, text, handleOnClick}) {
    return (
        <button id={id} className="button" onClick={handleOnClick}>{text}</button>
    )
}

export default Button;