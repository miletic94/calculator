import { SetStateAction } from "react";
import { handleButtonClick } from "../handlers/click-button.handler";

export function NumberButton(value: number, expression: string, setExpression: React.Dispatch<SetStateAction<string>>) {
  return (
      <button 
        key={value}
        className="btn-primary cell" 
        value={value} onClick={event => handleButtonClick(String(value), expression, setExpression)}>
          {value}
      </button>
        )
}