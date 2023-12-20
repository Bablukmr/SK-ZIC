import { useSelector } from "react-redux";

export default function MyButton(props) {
  const { text, mdh, mdw, bgColor, textColor, onClick, type } = props;

  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  return (
    <button
      bgColor={``}
      className={` ${mdh} ${mdw} ${textColor}  text-center rounded-md cursor-pointer
             outline-none border-none  active:shadow-none
             active:translate-y-[6px] duration-100
             ${
               darkMode
                 ? "bg-[#ff4d4f] shadow-[0px_6px_4px_0px_#cf1322]"
                 : "bg-[#40a9ff] shadow-[0px_6px_4px_0px_#096dd9]"
             }
             
             `}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
