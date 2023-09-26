import { SetStateAction } from "react";
import { Operator } from "../../enum/operator.enum";
import {
  buildASTFromRPN,
  evaluateAST,
} from "../../driver/abstract-syntax-tree";
import { shuntingYard } from "../../driver/shunting-yard";
import { HandleButtonClickFunction } from "../types/handle-button-click.type";

export const handleButtonClick: HandleButtonClickFunction = (
  value: string,
  expression: string,
  setExpression: React.Dispatch<SetStateAction<string>>
) => {
  if (
    (!isNaN(Number(value)) &&
      (!isNaN(Number(expression[-1])) || expression[-1] === undefined)) ||
    value === "."
  ) {
    setExpression(expression + value);
    return;
  }

  if (value === "RESET") {
    setExpression("");
    return;
  }

  if (value === "DEL") {
    if (expression[expression.length - 1] !== " ") {
      setExpression(expression.slice(0, -1));
      return;
    }
    setExpression(expression.slice(0, -3));
    return;
  }
  const operators = Object.values(Operator) as string[];

  if (operators.includes(value)) {
    if (expression === "") return;
    if (expression[expression.length - 1] === " ") {
      return;
    }
    setExpression(expression + " " + value + " ");
    return;
  }

  if (value === "=") {
    if (expression === "" || expression === undefined) {
      return;
    }
    if (expression[expression.length - 1] === " ") {
      return;
    }
    setExpression(
      String(evaluateAST(buildASTFromRPN(shuntingYard(expression))))
    );
    return;
  }
};
