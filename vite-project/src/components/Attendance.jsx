import React from "react";

const Attendance = (props) => {
    console.log(props)
  return (
    <div className="w-full h-60 bg-gray-300 items-center rounded-lg">
      {/* days container */}
      <div className="flex text-2xl font-medium gap-40 py-4 px-20">

        <div className="flex flex-col justify-center items-center gap-11 mt-20">
            <p>FN</p>
            <p>AN</p>
        </div>

        {/* Monday container */}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-1">Monday</p>
          <p className="font-semibold text-base pb-4">{props.data.ATTENDANCE.monday.date}</p>
          <div className={`w-11 h-11 mb-7 ${props?.data?.ATTENDANCE?.monday?.fn==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
          <div className={`w-11 h-11 bg-red-700 ${props?.data?.ATTENDANCE?.monday?.an==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
        </div>

        {/* Tuesday container */}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-1">Tuesday</p>
          <p className="font-semibold text-base pb-4">{props.data.ATTENDANCE.tuesday.date}</p>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.fn==='absent' ? 'bg-red-700' : 'bg-green-500'} mb-7`}></div>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.an==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
        </div>

        {/* Wednesday container */}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-1">Wednesday</p>
          <p className="font-semibold text-base pb-4">{props.data.ATTENDANCE.wednesday.date}</p>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.fn==='absent' ? 'bg-red-700' : 'bg-green-500'} mb-7`}></div>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.an==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
        </div>

        {/* Thursday container */}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-1">Thursday</p>
          <p className="font-semibold text-base pb-4">{props.data.ATTENDANCE.thursday.date}</p>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.fn==='absent' ? 'bg-red-700' : 'bg-green-500'} mb-7`}></div>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.an==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
        </div>

        {/* Friday container */}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-1">Friday</p>
          <p className="font-semibold text-base pb-4">{props.data.ATTENDANCE.friday.date}</p>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.fn==='absent' ? 'bg-red-700' : 'bg-green-500'} mb-7`}></div>
          <div className={`w-11 h-11 ${props?.data?.ATTENDANCE?.tuesday?.an==='absent' ? 'bg-red-700' : 'bg-green-500'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
