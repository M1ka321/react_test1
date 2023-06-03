import {useState} from "react";

interface MyInputProps{
  value: string | number;
  name : string;
  type:  number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MyInput = ( {value, name, handleChange} :MyInputProps) => {
  return (
    <div>
      <div>{value}</div>
      <input type="text" onChange={handleChange}/>
    </div>
  )
  }

