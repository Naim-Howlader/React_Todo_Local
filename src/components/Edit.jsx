import React from 'react'

export default function Edit({updateTodoHandler,currentTodo,setCurrentTodo,setIsEditing}) {
  return (
    <>
     <div className='bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 py-5 md:py-10 px-5'>
        <h2 className='text-center text-2xl font-semibold text-white uppercase'>todo app</h2>
        <div className='pt-5 md:pb-2'>
        <form className="max-w-xl mx-auto" onSubmit={updateTodoHandler}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative">
        
        <input  value={currentTodo} type="text" onChange={(e)=>setCurrentTodo(e.target.value)} id="default-search" className="block w-full p-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-0"/>
        <div className=''>
        <button type="submit" className="text-white absolute end-10 bottom-2.5 bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500  font-medium rounded-lg text-sm px-10 py-2 ">Update</button>
        <div style={{cursor:"pointer"}} onClick={()=>{setIsEditing(false);setCurrentTodo('')}} className='absolute end-2.5 bottom-3 text-2xl font-bold text-red-500'>
        <ion-icon name="close-outline"></ion-icon>
        </div>
        </div>
    </div>
</form>
        </div>
    </div>  
    </>
  )
}
