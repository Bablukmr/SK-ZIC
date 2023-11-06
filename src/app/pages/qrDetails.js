import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { notification } from "antd";
import LoadingAni from "../../components/loading";

export default function QrDetail() {
  const [searchParams] = useSearchParams();
  const token = useSelector((state) => state.AuthReducer.token);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // const [latitude, setlatitude] = useState(null)
  // const [longitude, setlongitude] = useState(null)
  // const [name, setname] = useState(null)
  // const [state, setstate] = useState(null)
  // const [country, setcountry] = useState(null)

  // useEffect(() => {
  //     const session = searchParams.get("id");
  //     // console.log("sss", session);
  // })

  useEffect(() => {
    const session = searchParams.get("id");
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        axios
          .get(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=6c77ffcc4e98194d877cee01a7e24315`
          )
          .then((d) => {
            let name = d.data && d.data[0]?.name;
            let state = d.data && d.data[0]?.state;
            let country = d.data && d.data[0]?.country;
            console.log("xyz");
            saveData(session, latitude, longitude, name, state, country);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      () => {
        saveData(session, null, null, null, null, null);
      }
    );
  }, []);

  const saveData = (session, latitude, longitude, name, state, country) => {
    console.log("abc");

    axios
      .post(
        "http://localhost:8000/qr/scan/",
        {
          id: session,
          longitude: longitude,
          latitude: latitude,
          location: name,
          state: state,
          country: country,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((d) => {
        setData(d.data);
        setLoading(false);
        notification["success"]({
          message: "Success !!",
          description: "Points transfered to your account.",
        });
      })
      .catch((e) => {
        setLoading(false);
        if (e.response) {
          console.log(e.response?.data);
          if (Array.isArray(e.response.data)) {
            let tt = e.response.data[0];
            console.log("tt", tt);
            notification["error"]({
              message: "Error !!",
              description: tt,
            });
          }
        }
        // if (e?.response?.data[0] === "error: this qr has been used") {
        //   setErrorMsg("This QR has been previously used.");
        //   // console.log("bb");
        //   notification["error"]({
        //     message: "Error !!",
        //     description: "This QR has been previously used.",
        //   });
        // } else {
        //   notification["error"]({
        //     message: "Error !!",
        //     description: "Something went wrong.",
        //   });
        // }
      });
  };

  return (
    <div className="h-[calc(100vh-80px)] flex  items-center bg-[redd]">
      {loading ? (
        <LoadingAni />
      ) : data ? (
        <div className="flex flex-col w-full items-center justify-center">
          <p>
            <b> {data?.points}</b> transfered to user account with the qr series
            no of
            <b> {data?.series}</b>
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          {errorMsg ? <p>{errorMsg}</p> : <p>Something went wrong</p>}
        </div>
      )}
    </div>
  );
}
