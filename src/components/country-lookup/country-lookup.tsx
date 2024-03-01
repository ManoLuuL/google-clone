"use client";

import { useEffect, useState } from "react";

export const CountryLookup = () => {
  const [country, setCountry] = useState("Brasil");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        );
        const data = await response.json();
        const country = data.country;
        setCountry(country);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
};
