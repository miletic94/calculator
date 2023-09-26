import { SetStateAction } from "react";
import { handleButtonClick } from "../handlers/click-button.handler";


export function EqualsButton(expression: string, setExpression: React.Dispatch<SetStateAction<string>>) {
    return <button 
                key={'='}
                className="span-2 btn-ternary btn-small-fonts equals" 
                onClick={event => handleButtonClick('=', expression, setExpression)}>=</button>
}