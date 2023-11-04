import MyButton from "../../components/button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../store/action";

export default function DesktopHeader() {
  const darkMode = useSelector((state) => state.AuthReducer.darkMode);

  console.log(darkMode);
  const dispatch = useDispatch();

  return (
    <div className={`${
      darkMode ? "bg-slate-700 text-white" : ""
    } bg-[greeen] h-[60px] flex justify-between`}>
      <div className="flex justify-center items-center w-1/5 bg-[cyaan]">
        <img src="/logo.png" className="w-[80px] h-[20px]" />
      </div>
      <div className="w-1/2 bg-[greeen] flex items-center">
        <ul className="flex justify-evenly w-full list-none p-0">
          <li className="cursor-pointer">
            <Link to="/" className={`no-underline ${darkMode ? "text-white" :"text-black"}`}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer ">Rewards</li>
          <li className="cursor-pointer ">Promotions</li>
          <li className="cursor-pointer ">Help & Support</li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div
          className={`flex  relative gap-1 p-1 rounded-full ${
            darkMode ? "border-[#8c8c8c]": "border-slate-300  "
          }  h-[20px] items-center justify-center border border-solid`}
        >
          <p
            onClick={() => dispatch(changeDarkMode(false))}
            className="cursor-pointer"
          >
            ☀️
          </p>
          <p
            onClick={() => dispatch(changeDarkMode(true))}
            className="cursor-pointer"
          >
            🌙
          </p>
          <p
            className={`absolute ${
              darkMode ? "right-1" : "left-1"
            } bg-black h-[20px] w-[20px] rounded-full cursor-pointer`}
          ></p>
        </div>
      </div>

      <div className="flex w-1/5 justify-center items-center bg-[oorange]">
        <Link to="/signin">
          <MyButton
            text="Login"
            mdh="h-[30px]"
            mdw="w-[80px]"
            bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
            // bgColor="bg-[#23262d]"
            textColor="text-white"
          />
        </Link>
        <div className="ml-4 ">
          <Link to="/admin-signin">
            <MyButton
              text="Admin Login"
              mdh="h-[30px]"
              mdw="w-[120px]"
              bgColor={`${darkMode ? "bg-red-500" : "bg-[#23262d]"}`}
              // bgColor="bg-[#23262d]"
              textColor="text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
