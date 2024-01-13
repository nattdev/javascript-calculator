import Button from './Button'

function Buttons({outputData}) {

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
    "id": "substract",
    "text": "-",
},
{
    "id": "multiply",
    "text": "X",
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
    <Button id={number.id} key={number.id} text={number.text} outputData={outputData}/>
); 

const operationButtons = operationsPad.map((operation) =>
    <Button id={operation.id} key={operation.id} text={operation.text} outputData={outputData}/>
); 

    return (
        <div className="buttons-wrapper">
            {numberButtons}
            {operationButtons}
        </div>
    )
}

export default Buttons;