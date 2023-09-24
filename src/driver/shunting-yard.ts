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
  // '3 * 4 - 2 * ( 2 + ( 2 + 1 ) )'
  // oQ = [3, 4, *, 2, 2, 2, 1, +, +, *, -]
  // oS = [-, *]
  const tokens = infixExpression.split(" ");
  for (const token of tokens) {
    console.log(token);
    if (!isNaN(Number(token))) {
      outputQueue.push(token);
    } else if (token in operatorPrecedence) {
      console.log({
        "operatorStack.length > 0 &&": operatorStack.length > 0,
        "isLeftAssociative[token]": isLeftAssociative[token],
        "opPrecedence[token]": operatorPrecedence[token],
        "opStack.length": operatorStack.length,
        "opPrecedence[opStack.length - 1]":
          operatorPrecedence[operatorStack.length - 1],
        a:
          operatorPrecedence[token] <=
          operatorPrecedence[operatorStack.length - 1],
      });
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
