import { SetStateAction } from "react";

export type HandleButtonClickFunction = (
  value: string,
  expression: string,
  setExpression: React.Dispatch<SetStateAction<string>>
) => void;
