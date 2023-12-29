import React from "react";

const MenuItem = ({ name, Icon }) => {
  return (
    <div
      className="flex items-center gap-1 text-white hover:cursor-pointer hover:underline underline-offset-8 font-semibold space-x-1"
    >
      <Icon />
      <h2 className="text-sm md:text-md">{name}</h2>
    </div>
  );
};

export default MenuItem;
