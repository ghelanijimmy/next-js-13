import { IPData } from "@/types/IPData";

export const getLocationData = async () => {
  const res = await fetch(`https://ipapi.co/json/`);
  if (!res.ok) throw new Error("Failed to fetch IP data");
  return (await res.json()) as IPData;
};
