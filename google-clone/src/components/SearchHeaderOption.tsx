import React, { FC } from "react";
import { IconType } from "react-icons";

interface SearchHeaderOptionProps {
  isActive: boolean;
  selectTab: (tab: "Images" | "All") => void;
  tab: "Images" | "All";
  Icon: IconType;
}

const SearchHeaderOption: FC<SearchHeaderOptionProps> = ({
  isActive,
  selectTab,
  tab,
  Icon,
}) => {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
        isActive && "text-blue-600 !border-blue-600"
      }`}
      onClick={() => selectTab(tab)}
    >
      <Icon className="text-md" />
      <p>{tab}</p>
    </div>
  );
};

export default SearchHeaderOption;
