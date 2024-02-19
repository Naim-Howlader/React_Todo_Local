import React from 'react'

export default function List({allTodos,deleteTodo,editTodoHandler}) {
  return (
    <>
    <div className='px-5'>
        <h2 className='text-center uppercase text-xl md:text-2xl py-5 font-semibold'>List of todo :</h2>
        <div>

            {
                allTodos.map((item)=>{
                    if(item){
                        return(
                            <div key={item.id} className='md:px-20 my-5'>
                    <div className='bg-[#F5F5F5] rounded-lg py-2 px-5 flex justify-between items-center'>
                        <p className='text-lg'>{item.todo}</p>
                        <div className='flex gap-x-4'>
                            <div onClick={()=>editTodoHandler(item)} className="bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 text-2xl text-white w-[35px] h-[35px] rounded-lg flex justify-center items-center">
                            <ion-icon name="create-outline" ></ion-icon>
                            </div>
                            <div onClick={()=>deleteTodo(item)} className="bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 text-2xl text-white w-[35px] h-[35px] rounded-lg flex justify-center items-center">
                            <ion-icon name="trash-outline" ></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    }//else{
                       // return('NO Item Found')
                    //}
                })
            }

        </div>
    </div> 
    </>
  )
}
