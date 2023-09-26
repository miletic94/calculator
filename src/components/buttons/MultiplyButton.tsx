import { SetStateAction } from "react";
import { handleButtonClick } from "../handlers/click-button.handler";

export function MultiplyButton(expression: string, setExpression: React.Dispatch<SetStateAction<string>>) {
    return <button 
                key={'*'}
                className="btn-primary"  
                onClick={event => handleButtonClick('*', expression, setExpression)}>x</button>
}