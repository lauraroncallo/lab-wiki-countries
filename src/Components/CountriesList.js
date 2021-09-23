import React, {useState} from "react";
import countries from "../countries.json";
import {NavLink} from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountriesList(){
    const [countriesList]= useState (countries);
    return (
        <>
        <h3>Countries</h3>
        <ul> 
            {countriesList.map((country, index)=> {
                return (
                <li key={index}>
                <NavLink exact to={`/countries/${country.alpha3Code}`}>
                {country.name}</NavLink> 
                </li>);
            })}

        </ul>
        </>
    );
}




export default CountriesList;

