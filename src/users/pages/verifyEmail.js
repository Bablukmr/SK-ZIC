import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result, Skeleton } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  let { key } = useParams();

  const [loading, setLoading] = useState(true);
  const [VerifySuccess, setVerifySuccess] = useState(false);
  useEffect(() => {
    if (key) {
      // setLoading(true);

      axios
        .post("http://localhost:8000/verify-email/", {
          key,
        })
        .then((d) => {
          setLoading(false);
          setVerifySuccess(true);
        })
        .catch((e) => {
          setLoading(false);
        });
    }
  }, [key]);

  return (
    <div className="flex items-center w-full h-[calc(100vh-60px)] justify-center">
      {loading ? (
        <div className="w-1/2">
          <Skeleton active avatar paragraph={{ rows: 4 }} />
        </div>
      ) : VerifySuccess ? (
        <Result
          status="success"
          title="Great, You have verified your email."
          extra={
            <div className="flex w-full mt-6 rounded-md">
              <Link to="/signin" className="w-full">
                <button
                  className="cursor-pointer w-full h-[2.3rem] rounded-md
                   bg-[#333333] hover:bg-[#333333de] text-white"
                >
                  Go To Login
                </button>
              </Link>
            </div>
          }
        />
      ) : (
        <Result
          status="500"
          // title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <div className="flex w-full mt-6 rounded-md">
              <Link to="/" className="w-full">
                <button
                  className="cursor-pointer w-full h-[2.3rem] rounded-md
                   bg-[#333333] hover:bg-[#333333de] text-white"
                >
                  Go To Home
                </button>
              </Link>
            </div>
          }
        />
      )}
    </div>
  );
}
