import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
   
  return (
    <>
  <div className=' flex h-screen items-center justify-center'>
  <div id="my_modal_3" className="border-[1px] shadow-md rounded-md">
  <div class="dark:bg-slate-900 dark:text-white m-8">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
   
    <h3 class="text-lg font-bold">Signup</h3> <br />
    <div className="space-y-3">
        <span>Name</span> <br />
        <input 
       {...register("name", {required: true})}
        className='border rounded-md px-3 py-3 w-full' 
        type="text" placeholder='Enter your name'/>
 {errors.name && <span className='text-green-500 text-sm'>This field is required</span>}
    </div>
    <div className="mt-4 space-y-3">
        <span>Email</span> <br />
        <input
        {...register("email", {required: true})}
        className='w-full border rounded-md p-3 outline-none'
         type="email" placeholder='Enter your email'/>
          {errors.email && <span className='text-green-500 text-sm'>This field is required</span>}
    </div>
    <div className="space-y-3 mt-2">
        <span>Password</span>
        <br />
        <input
        {...register("password", {required: true})}
        className='border rounded-md p-3 w-full'
        type="password" placeholder='Enter your password' />
         {errors.password && <span className='text-green-500 text-sm'>This field is required</span>}
    </div>
    <div className="flex justify-between mt-6 mx-10 space-x-20">
   
<button className='text-white bg-pink-600 px-3 py-2 rounded-md cursor-pointer hover:bg-pink-500'>Signup</button>
<p>Already have an account? <Link to="/" className='text-cyan-600 underline cursor-pointer'>Login</Link></p>
      
    
        
    </div>
    </form>
  </div>
</div>
  </div>
    </>
  )
}

export default Signup