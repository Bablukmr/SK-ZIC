export default function MyButton(props) {
    const { text, mdh, mdw, bgColor, textColor, onClick, type } = props
    return (
        <button className={` ${mdh} ${mdw} ${bgColor} ${textColor} rounded-md cursor-pointer
             outline-none border-transparent focus:border-transparent focus:ring-0`}
            onClick={onClick}
            // type={type}
        >
            {text}
        </button>
    )
}
