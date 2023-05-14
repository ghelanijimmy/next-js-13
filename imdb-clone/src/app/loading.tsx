import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Loading;
