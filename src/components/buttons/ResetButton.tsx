import { SetStateAction } from "react";
import { handleButtonClick } from "../handlers/click-button.handler";


export function ResetButton(expression: string, setExpression: React.Dispatch<SetStateAction<string>>) {
    return <button 
                key={'RESET'}
                className="span-2 btn-secondary btn-small-fonts reset"
                 onClick={event => handleButtonClick('RESET', expression, setExpression)}>RESET</button>
}