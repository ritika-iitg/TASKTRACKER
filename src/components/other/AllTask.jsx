
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {   
    
    const [userData,setUserData]=useContext(AuthContext)
    return(
    
<div className='p-5 bg-black mt-5 rounded  '>
      <div className="bg-red-400 py-2 px-4 flex justify-between mb-2 " >
        <h2 className="text-lg font-medium w-1/5 bg-red-600">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 bg-red-600">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Active Task</h5>
         <h5 className="text-lg font-medium w-1/5 bg-red-600">Completed</h5>
          <h5 className="text-lg font-medium w-1/5 bg-red-600">Failed</h5>
        </div>
        <div className="overflow-auto">
  {userData.map(function(elem,idx){
    return <div key={idx} className=" py-2 px-4 flex justify-between mb-2 border-2 border-teal-500" >
        <h2 className="text-lg font-medium w-1/5 text-red-600">{elem.firstName}</h2>
        <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCounts.newTask}</h3>
        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</h5>
         <h5 className="text-lg font-medium w-1/5 text-green-400">{elem.taskCounts.completed}</h5>
         <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
        </div>
    })
}
</div>
    </div>
    
    )
}
        

export default AllTask;