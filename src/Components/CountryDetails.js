import React, {useEffect, useState} from "react";
import countries from "../countries.json";

function CountryDetails(props){
const [country, setCountry] = useState({
    name: "",
    capital: "",
    area: "",
    flag: "",
    borders: [],
});
const [filter, setFilter]= useState("");
 
    useEffect(()=> {
        const countryAlphacode = props.match.params.alpha3Code;
        const foundCountry = countries.find((country)=>country.alpha3Code === countryAlphacode);
        console.log(foundCountry);
        setCountry(foundCountry);
    }, []);

    useEffect(()=> {
        console.log("call an API with info from the input")
        }, [filter]); 

        useEffect(()=>{
            return()=>{
                console.log("component is unmounting");
            };
            }, []);


    return  (
        <>
    <h1>CountryDetail {country.name} </h1>
</>
    );
        


 

}

export default CountryDetails;