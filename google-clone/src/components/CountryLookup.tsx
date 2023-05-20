"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface IPData {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

const getLocationData = async (
  setData: Dispatch<SetStateAction<IPData | undefined>>
) => {
  const res = await fetch(`https://ipapi.co/json/`);
  if (!res.ok) throw new Error("Failed to fetch IP data");
  const data = (await res.json()) as IPData;
  setData(data);
};

const CountryLookup = () => {
  const [locationData, setLocationData] = useState<IPData>();
  useEffect(() => {
    getLocationData(setLocationData).catch((err) => console.error(err));
  }, []);
  return (locationData && <div>{locationData.city}</div>) || null;
};

export default CountryLookup;
