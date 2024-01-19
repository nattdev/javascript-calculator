import Button from './Button'

function Buttons({ handleNumber, handleOperation, handleDecimal, clear, calculate }) {

    const numbersPad = [{
        "id": "seven",
        "text": "7",
        "handleOnClick": handleNumber
    },
    {
        "id": "eight",
        "text": "8",
        "handleOnClick": handleNumber
    },
    {
        "id": "nine",
        "text": "9",
        "handleOnClick": handleNumber
    },
    {
        "id": "four",
        "text": "4",
        "handleOnClick": handleNumber
    },
    {
        "id": "five",
        "text": "5",
        "handleOnClick": handleNumber
    },
    {
        "id": "six",
        "text": "6",
        "handleOnClick": handleNumber
    },
    {
        "id": "one",
        "text": "1",
        "handleOnClick": handleNumber
    },
    {
        "id": "two",
        "text": "2",
        "handleOnClick": handleNumber
    },
    {
        "id": "three",
        "text": "3",
        "handleOnClick": handleNumber
    },
    {
        "id": "zero",
        "text": "0",
        "handleOnClick": handleNumber
    },
    {
        "id": "decimal",
        "text": ".",
        "handleOnClick": handleDecimal
    },
    {
        "id": "clear",
        "text": "AC",
        "handleOnClick": clear
    }
    ];

    const operationsPad = [{
        "id": "add",
        "text": "+",
        "handleOnClick": handleOperation
    },
    {
        "id": "subtract",
        "text": "-",
        "handleOnClick": handleOperation
    },
    {
        "id": "multiply",
        "text": "*",
        "handleOnClick": handleOperation
    },
    {
        "id": "divide",
        "text": "/",
        "handleOnClick": handleOperation
    },
    {
        "id": "equals",
        "text": "=",
        "handleOnClick": calculate
    }
    ];

    const numberButtons = numbersPad.map((number) =>
        <Button id={number.id} key={number.id} text={number.text} handleOnClick={number.handleOnClick} isNumber={true} />
    );

    const operationButtons = operationsPad.map((operation) =>
        <Button id={operation.id} key={operation.id} text={operation.text} handleOnClick={operation.handleOnClick} isOperation={true} />
    );
 
    return (
        <div className="buttons-wrapper grid grid-rows-4 grid-flow-col grid-cols-5 gap-4 p-6">
            {numberButtons}
            {operationButtons}
        </div>
    )
}

export default Buttons;