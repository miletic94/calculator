import { SetStateAction } from "react"
import { handleButtonClick } from "../handlers/click-button.handler"


export function DelButton(expression: string, setExpression: React.Dispatch<SetStateAction<string>>) {
    return <button 
                key={'DEL'}
                className="btn-secondary btn-small-fonts del" 
                data-delete onClick={event => handleButtonClick('DEL', expression, setExpression)}>DEL
            </button>
}

