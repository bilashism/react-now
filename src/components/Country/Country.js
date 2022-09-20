import React from "react";
import "./Country.css";
const Country = props => {
  const {
    name: { common },
    area,
    region,
    flags: { png: flagPng }
  } = props.country;
  console.log(props.country);
  return (
    <div className="single-country">
      <figure class="">
        <picture class="">
          <source media="(min-width: 350px)" srcSet={flagPng} />
          <img
            src={flagPng}
            alt={`${common} flag`}
            className="img-fluid"
            loading="lazy"
            width="120"
            height="80"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
      </figure>
      <h2>
        name: <span className="name">{common}</span>
      </h2>
      <h2>
        area: <span className="area">{area}</span>
      </h2>
      <h2>
        region: <span className="region">{region}</span>
      </h2>
    </div>
  );
};

export default Country;
