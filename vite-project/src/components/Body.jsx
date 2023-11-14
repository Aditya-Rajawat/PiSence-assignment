import React from "react";
import Attendance from "./Attendance";
import Homework from "./Homework";
import Behaviour from "./Behaviour";

const Body = () => {
  const realdata = {
    NAME: "PISENCE",
    ATTENDANCE: {
      monday: {
        date: "21/7/23",
        fn: "present",
        an: "present",
      },
      tuesday: {
        date: "22/7/2423",
        fn: "absent",
        an: "present",
      },
      wednesday: {
        date: "23/7/25",
        fn: "present",
        an: "absent",
      },
      thursday: {
        date: "24/7/25",
        fn: "present",
        an: "present",
      },
      friday: {
        date: "25/7/25",
        fn: "absent",
        an: "present",
      },
    },

    homework: ["english", "science", "maths", "social", "tamil"],

    Behavioral_Analytics: ["good", "bad", "good", "bad", "good"],
  };

  return (
    <div className="py-11 px-10">
      <p className="text-2xl font-medium">HELLO! {realdata?.NAME}</p>

      <h1 className="text-xl font-semibold text-center py-1 tracking-wide">
        ATTENDANCE
      </h1>
      {/* Attendance container */}
      <Attendance data={realdata} />
      <div className="flex gap-16">
        <Homework data={realdata} />
        <Behaviour data={realdata} />
      </div>
    </div>
  );
};

export default Body;
