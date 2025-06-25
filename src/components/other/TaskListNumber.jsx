import React from 'react'

const TaskListNumber=({data})=>{
   return(
   <div className='flex mt-10 justify-between gap-5 screen-w'>
    <div className='rounded-xl  w-[45%] py-8 px-10 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    <div className='rounded-xl  w-[45%] py-8 px-10 bg-pink-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
    </div>
    <div className='rounded-xl  w-[45%] py-8 px-10 bg-green-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
    </div>
    <div className='rounded-xl  w-[45%] py-8 px-10 bg-red-500'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
    </div>
   </div>
    
   )
}
export default TaskListNumber