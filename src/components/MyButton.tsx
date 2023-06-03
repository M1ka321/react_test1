interface MyButtonProps {
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


const MyButton = ({children, onClick}:MyButtonProps) => {

    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default MyButton