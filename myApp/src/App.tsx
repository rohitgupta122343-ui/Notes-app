
import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('');
const [details, setDetails] = useState('');
const [task, setTask] = useState<{ title: string; details: string }[]>([]);


const submitHandler = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    setTitle('');
    setDetails('');

    let copy = [...task];

    copy.push({title,details});

    setTask(copy);

    console.log(task);
    
  }

  const delteNote = (i: number)=>{

   const  copyTasks = [...task];

    copyTasks.splice(i,1);

    setTask(copyTasks);
  }

  return (
    <div className='w-full min-h-screen bg-zinc-900 lg:p-10 p-3 text-white'>
      
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={title} onChange={(e)=>{
          setTitle(e.target.value);
          
        }}   placeholder='Enter a Task' className='w-full lg:w-1/3 px-3 py-2 bg-transparent rounded-md outline-none border-2 border-zinc-800' type="text"  />
        <textarea value={details} onChange={(e)=>{
            setDetails(e.target.value);
            
        }} placeholder='Enter a Details' className='w-full lg:w-1/3 block resize-none mt-2 px-3 py-2 bg-transparent rounded-md outline-none border-2 border-zinc-800' ></textarea>
        <input className='px-3 py-2 bg-blue-500 rounded-md mt-2' type="submit" value="create" />
      </form>

    <div className="post lg:mt-15 mt-5">
      <div className="post-container flex flex-wrap gap-2">
       
       {task.map(function(item,i){
         return <div key={i} className="post lg:w-1/3 w-full border-2 border-zinc-800 bg-transparent rounded-md p-2">
          <p className='text-blue-500 mb-1'>@{item.title}</p>
          <p className='tracking-tight'>{item.details}</p>

          <div className='mt-4 flex justify-between'>
            <button className='text-zinc-500'>Edit</button>
             <button onClick={()=>{
              delteNote(i)
             }} className='text-red-500'>Delete</button>
          </div>
        </div>
       })}
       
     
       
      </div>
    </div>

    </div>
  )
}

export default App
