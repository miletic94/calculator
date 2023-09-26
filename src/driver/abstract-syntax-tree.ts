import { Operator } from "../enum/operator.enum";

class TreeNode {
  value: string;
  left: TreeNode | undefined;
  right: TreeNode | undefined;
  constructor(value: string) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export function buildASTFromRPN(rpnTokens: string[]) {
  const stack: TreeNode[] = [];
  for (const token of rpnTokens) {
    if (!isNaN(Number(token))) {
      stack.push(new TreeNode(token));
    } else {
      const operatorNode = new TreeNode(token);
      operatorNode.right = stack.pop();
      operatorNode.left = stack.pop();

      stack.push(operatorNode);
    }
  }

  return stack.pop();
}

export function evaluateAST(node: TreeNode | undefined) {
  if (!node) return 0;
  if (!node.left && !node.right) return parseFloat(node.value);

  const lefValue: number = evaluateAST(node.left);
  const rightValue: number = evaluateAST(node.right);

  switch (node.value) {
    case Operator.plus:
      return lefValue + rightValue;
    case Operator.minus:
      return lefValue - rightValue;
    case Operator.multiplication:
      return lefValue * rightValue;
    case Operator.division:
      if (rightValue === 0) throw new Error("Division by zero");
      return lefValue / rightValue;
    default:
      throw new Error("Invalid operator " + node.value);
  }
}
