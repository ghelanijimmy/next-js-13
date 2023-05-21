"use client";
import React, { useEffect, useState } from "react";
import { IPData } from "@/types/IPData";
import { getLocationData } from "@/utils/getLocationData";

const CountryLookup = () => {
  const [locationData, setLocationData] = useState<IPData>();
  useEffect(() => {
    const getData = async () => {
      const data = await getLocationData();
      setLocationData(data);
    };
    getData().catch((err) => {
      console.error(err);
    });
  }, []);
  return (locationData && <div>{locationData.city}</div>) || null;
};

export default CountryLookup;
