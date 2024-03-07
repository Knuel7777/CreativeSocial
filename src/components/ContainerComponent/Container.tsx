import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="text-white" style={{ height: "80%" }}>
      {children}
    </div>
  );
};

export default Container;
