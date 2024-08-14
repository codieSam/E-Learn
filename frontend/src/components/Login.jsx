import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    

  return (
    <>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <h3 className="text-lg font-bold">Login</h3>
    <div className="mt-4 space-y-3">
        <span>Email</span> <br />
        <input
        {...register("email", {required: true})}
        className='w-80 border rounded-md p-3 outline-none'
         type="email" placeholder='Enter your email'/> <br />
         {errors.email && <span className='text-green-500 text-sm'>This field is required</span>}
    </div>
    <div className="space-y-3 mt-2">
        <span>Password</span>
        <br />
        <input
        {...register("password",{required: true})}
        className='border rounded-md p-3 w-80 outline-none'
        type="password" placeholder='Enter your password' /> <br />
        {errors.password && <span className='text-green-500'>This field is required</span>}
    </div>
    <div className="flex justify-between mt-6 mx-10">
   
<button className='bg-pink-600 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-pink-500'>Login</button>
<p>Not registered yet?{" "}
    <Link to ="/signup" className='text-cyan-600 underline cursor-pointer'>Signup</Link>{" "}
</p>
      
    
        
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login