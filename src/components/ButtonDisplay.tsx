import { SetStateAction } from "react"
import { NumberButton } from "./buttons/NumberButton"
import { DelButton } from "./buttons/DelButton"
import { PlusButton } from "./buttons/PlusButton"
import { DotButton } from "./buttons/DotButton"
import { MinusButton } from "./buttons/MinusButton"
import { DivideButton } from "./buttons/DivideButton"
import { MultiplyButton } from "./buttons/MultiplyButton"
import { ResetButton } from "./buttons/ResetButton"
import { EqualsButton } from "./buttons/EqualsButton"

export function ButtonDisplay(props: {expression: string, setExpression: React.Dispatch<SetStateAction<string>>}) {
    const buttonValues = [7, 8, 9, 'DEL', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', 'x', 'RESET', '=']
    return (
    <div className="buttons">
      {
        buttonValues.map((buttonValue) => {
            if(!isNaN(Number(buttonValue))) return  NumberButton(buttonValue as number, props.expression, props.setExpression)
            if(buttonValue === 'DEL') return DelButton(props.expression, props.setExpression)
            if(buttonValue === '+') return  PlusButton(props.expression, props.setExpression)
            if(buttonValue === '-') return MinusButton(props.expression, props.setExpression)
            if(buttonValue === '.') return DotButton(props.expression, props.setExpression)
            if(buttonValue === '/') return DivideButton(props.expression, props.setExpression)
            if(buttonValue === 'x') return MultiplyButton(props.expression, props.setExpression)
            if(buttonValue === 'RESET') return ResetButton(props.expression, props.setExpression)
            if(buttonValue === '=') return EqualsButton(props.expression, props.setExpression)
            return undefined
        })
      }

      
     
      


      
      
    </div>
    )
}