

interface MyInputProps{
  value: string | number;
  name : string;
  type?:  'text' | 'number'
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MyInput = ({value, name, type, handleChange} :MyInputProps) => {

  return (
    <div>
      <input type={type} name={name} onChange={handleChange} value={value}/>
    </div>
  )
  }

