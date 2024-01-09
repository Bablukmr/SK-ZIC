import { useSelector } from "react-redux";

export default function MyButton(props) {
  const { text, mdh, mdw, bgColor, textColor, onClick, type } = props;

  const darkMode = useSelector((state) => state.AuthReducer.darkMode);
  // hover:shadow-[0px_6px_4px_0px_#FF395E]
  // hover:shadow-[0px_6px_4px_0px_#1EA7ED]
  return (
    <button
      bgColor={``}
      className={` ${mdh} ${mdw} ${textColor}  text-center rounded-md cursor-pointer
             outline-none border-none  active:shadow-none
             active:translate-y-[6px] duration-100 
             ${
               darkMode
                 ? "bg-[#E1173D] shadow-[0px_6px_4px_0px_#cf1322] hover:bg-[#FF395E]"
                 : "bg-[#0089CF] shadow-[0px_6px_4px_0px_#096dd9] hover:bg-[#1EA7ED]"
             }
             
             `}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
