import React from "react";
import { vacationDates } from "./data";  

export const Dates = () => {
  return (
    <>
      <div className="dates-container">
        {vacationDates.map((data, key) => {
          return <div key={key}>{data.date + ", " + data.name}</div>;
        })}
      </div>
    </>
  );
};
