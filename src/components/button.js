export default function MyButton(props) {
  const { text, mdh, mdw, bgColor, textColor, onClick, type } = props;
  return (
    <button
      className={` ${mdh} ${mdw} ${bgColor} ${textColor} hover:opacity-90 active:shadow-md text-center rounded-md cursor-pointer
             outline-none border-transparent focus:border-transparent focus:ring-0`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
