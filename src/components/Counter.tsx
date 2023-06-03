import MyButton from "./MyButton";

interface CounterProps {
  count: number;
  onIncrement: React.MouseEventHandler<HTMLButtonElement>;
  onDecrement: React.MouseEventHandler<HTMLButtonElement>;
}

export const Counter = ({count,onIncrement,onDecrement}:CounterProps) => {


  return(
    <div>
      <strong>{count}</strong>
      <MyButton onClick={onIncrement}>+ 1</MyButton>
      <MyButton onClick={onDecrement}>- 1</MyButton>
    </div>
  )
}
