function Button({ id, text, handleOnClick, isNumber, isOperation}) {

    const classStyle = `button ${isOperation ? "bg-blue-400 text-white" : "bg-yellow-400 text-slate-800 rounded-md"} p-3 font-semibold ${text == "=" ? "row-start-3 row-end-5 col-start-4 col-end-6 text-6xl max-sm:text-4xl pt-1 rounded" : "text-3xl max-sm:text-xl rounded"}`;

    return (
            <button id={id} className={classStyle} onClick={handleOnClick}>{text}</button>
    )
}

export default Button;