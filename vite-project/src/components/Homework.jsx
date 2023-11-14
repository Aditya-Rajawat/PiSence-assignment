import React from "react";

const Homework = (props) => {
    const {homework}=props?.data;
  return (
    <div className="w-2/5 mt-7 h-60 bg-gray-300 rounded-lg">
      <p className="text-2xl font-medium text-center pt-4">Homeworks</p>

      <div className="grid grid-rows-3 grid-flow-col py-4 px-24 text-2xl font-medium justify-between gap-7">
        {homework.map((sub)=>(
            <p className="uppercase">{sub}</p>
        ))}
      </div>
    </div>
  );
};

export default Homework;
