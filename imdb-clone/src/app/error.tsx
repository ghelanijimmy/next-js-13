"use client";

import React, { FC } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};
const Error: FC<ErrorProps> = ({ reset }) => {
  return (
    <div className="text-center mt-10">
      <h1>Something Went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
