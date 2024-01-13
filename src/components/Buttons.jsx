import Button from './Button'

function Buttons({inputData, setInput, input, setOutput}) {

const numbersPad = [{
    "id": "seven",
    "text": "7",
}, 
{
    "id": "eight",
    "text": "8",
},
{
    "id": "nine",
    "text": "9",
},
{
    "id": "four",
    "text": "4",
},
{
    "id": "five",
    "text": "5",
},
{
    "id": "six",
    "text": "6",
},
{
    "id": "one",
    "text": "1",
},
{
    "id": "two",
    "text": "2",
},
{
    "id": "three",
    "text": "3",
},
{
    "id": "zero",
    "text": "0",
},
{
    "id": "decimal",
    "text": ".",
},
{
    "id": "clear",
    "text": "AC",
}
];

const operationsPad = [{
    "id": "add",
    "text": "+",
}, 
{
    "id": "subtract",
    "text": "-",
},
{
    "id": "multiply",
    "text": "x",
},
{
    "id": "divide",
    "text": "/",
},
{
    "id": "equals",
    "text": "=",
}
];

const numberButtons = numbersPad.map((number) =>
    <Button id={number.id} key={number.id} text={number.text} inputData={inputData} setInput={setInput} input={input} setOutput={setOutput}/>
); 

const operationButtons = operationsPad.map((operation) =>
    <Button id={operation.id} key={operation.id} text={operation.text} inputData={inputData} setInput={setInput} input={input} setOutput={setOutput}/>
); 

    return (
        <div className="buttons-wrapper">
            {numberButtons}
            {operationButtons}
        </div>
    )
}

export default Buttons;