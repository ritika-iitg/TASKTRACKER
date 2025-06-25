import React from "react";

const FailedTask = () => {
    return(
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl '>
 <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 text-sm flex justify-between px-3 py-1 rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.taskDate}</h4>
 </div>
 <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
 <p>{data.taskDescription}</p>
 <div>
    <button className="bg-green-500">Failed</button>
 </div>
 </div>
    )}
    export default FailedTask;