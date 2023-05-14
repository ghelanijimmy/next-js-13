import React, { FC } from "react";
import { TMDBResponseResult } from "@/types/tmdbResponse";
import Card from "@/components/Card";

type ResultProps = {
  result: TMDBResponseResult;
};

const Result: FC<ResultProps> = ({ result }) => {
  return <Card result={result} />;
};

export default Result;
