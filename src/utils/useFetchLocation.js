import { useState , useEffect } from "react";
export const useFetchLocation = ()=>{
    const [location , setLocation] = useState({}) ; 
    useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({latitude , longitude}) ;
    })
    }, []);

    return location ;
}
