import { useState, useEffect } from 'react'
import QrReader from 'react-qr-scanner'
import { useNavigate } from "react-router-dom";

export default function ScanQr() {
    const navigate = useNavigate();

    const handleScan = (data) => {
        if (data) {
            let toGo = data.text.slice(19)
            navigate(toGo)
        }
    }

    // const [lat, setLat] = useState(null)
    // const [lon, setLon] = useState(null)
    // useEffect(() => {
    //     let d = navigator.geolocation.getCurrentPosition((position) => {

    //         if (position) {
    //             console.log(position.coords.latitude);
    //         }

    //         setLat(position.coords.latitude)
    //         setLon(position.coords.longitude)

    //         axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=6c77ffcc4e98194d877cee01a7e24315`)
    //             .then(d => {
    //                 console.log(d.data && d.data[0]);
    //             })
    //             .catch((e) => {
    //                 console.log(e);
    //             })
    //     })
    // }, [])


    const previewStyle = {
        height: 240,
        width: "100%",
    }
    return (
        <div className='w-full h-[calc(100vh-60px)] bg-[reed] flex justify-center items-center'>

            <div className='bg-[re]'>
                <QrReader
                    delay="300"
                    style={previewStyle}
                    legacyMode={true}
                    onError={(e) => {
                        console.log("error", e);
                    }}
                    constraints={{
                        video: { facingMode: "environment" }
                    }}
                    onScan={handleScan}
                />
            </div>
        </div>
    )
}
