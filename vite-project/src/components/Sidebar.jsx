import React from "react";
import home_button from "../assets/home.svg";
import books from "../assets/books.svg";
import cctv from "../assets/cctv.svg";
import notebook from "../assets/notebook.svg";

const Sidebar = () => {
  return (
    <div className="w-[390px] relative bg-white shadow-2xl right-[575px] top-[370px] h-[660px] z-10 flex flex-col gap-14 pt-24 px-9">
      {/* 1st option */}
      <div className="flex items-center gap-7 hover:bg-slate-100 cursor-pointer py-4 rounded-lg px-2">
        <img className="w-10 h-10" src={home_button} alt="" />
        <p className="text-2xl">Summary Dashboard</p>
      </div>

      {/* 2nd option */}
      <div className="flex items-center gap-7 hover:bg-slate-100 cursor-pointer py-4 rounded-lg px-2">
        <img className="w-10 h-10" src={books} alt="" />
        <p className="text-2xl">Attendance Tracking</p>
      </div>

      {/* 3rd option */}
      <div className="flex items-center gap-7 hover:bg-slate-100 cursor-pointer py-4 rounded-lg px-2">
        <img className="w-10 h-10 scale-x-[-1]" src={cctv} alt="" />
        <p className="text-2xl">Behavioral Analytics</p>
      </div>

      {/* 4th option */}
      <div className="flex items-center gap-7 hover:bg-slate-100 cursor-pointer py-4 rounded-lg px-2">
        <img className="w-10 h-10" src={notebook} alt="" />
        <p className="text-2xl">Academic Performance Tracking</p>
      </div>
    </div>
  );
};

export default Sidebar;
