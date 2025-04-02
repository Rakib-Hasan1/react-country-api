import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  const handleVisitedCountries = (country) => {
    console.log("Country count added", country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };
  return (
    <div>
      <h1>My Traveling Countries : {countries.length}</h1>

      <h2>Traveled Country : {visitedCountries.length}</h2>
      <div className="visited-flags-container">
        {
            visitedFlags.map((flag,i) => <img key={i} src={flag}></img>)
        }
      </div>

      <ol>
        {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
        </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
