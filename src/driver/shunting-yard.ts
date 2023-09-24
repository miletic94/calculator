const operatorPrecedence: { [key: string]: number } = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
};

const isLeftAssociative: { [key: string]: boolean } = {
  "+": true,
  "-": true,
  "*": true,
  "/": true,
};

export function shuntingYard(infixExpression: string): string[] {
  const outputQueue: string[] = [];
  const operatorStack: string[] = [];
  const tokens = infixExpression.split(" ");
  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      outputQueue.push(token);
    } else if (token in operatorPrecedence) {
      while (
        operatorStack.length > 0 &&
        token !== "(" &&
        ((isLeftAssociative[token] &&
          operatorPrecedence[token] <=
            operatorPrecedence[operatorStack[operatorStack.length - 1]]) ||
          (!isLeftAssociative[token] &&
            operatorPrecedence[token] <
              operatorPrecedence[operatorStack.length - 1]))
      ) {
        outputQueue.push(operatorStack.pop() as string);
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1] !== "("
      ) {
        outputQueue.push(operatorStack.pop() as string);
      }
      if (operatorStack[operatorStack.length - 1] === "(") {
        // Pop and discard the open parenthesis.
        operatorStack.pop();
      }
    }
  }
  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop() as string);
  }

  return outputQueue;
}
