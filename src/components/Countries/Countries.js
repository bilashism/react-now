import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <section className="country-section">
      <h2>Countries: {countries.length}</h2>
      <div className="countries-container">
        {countries.map(country => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </section>
  );
};

export default Countries;
