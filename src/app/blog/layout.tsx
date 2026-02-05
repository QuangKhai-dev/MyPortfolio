import React from "react";
import ReactQueryProvider from "./provider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReactQueryProvider>
        <div className="container">
          <div className="py-10">{children}</div>
        </div>
      </ReactQueryProvider>
    </>
  );
};

export default layout;
