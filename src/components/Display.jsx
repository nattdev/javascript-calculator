function Display({input, output}) {
    return (
        <div className="display-wrapper bg-slate-200 p-6 mt-6 flex flex-col gap-2 w-11/12 text-right text-3xl max-sm:text-2xl dark:bg-slate-900">
            <p className="input-screen bg-white p-2 dark:bg-slate-900 dark:text-white">{input}</p>
            <p className="output-screen bg-white p-2 border border-slate-500 dark:border-white dark:bg-slate-900 dark:text-white" id="display">{output}</p>
        </div>
    )
}

export default Display;