import React from 'react'
import list from '../../public/list.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'


function Course() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className="text-2xl md:text-4xl">These are the all available <span className='text-pink-500'>courses !!</span></h1>
            <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea officia atque, velit minima ducimus modi non consectetur ratione consequuntur quibusdam exercitationem quam sapiente ipsa. Vel amet dicta eligendi totam possimus.</p>
            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-3 grid grid-cols-1 md:grid-cols-4'>
            {
               list.map((item)=>(
                <Cards item={item} key={item.id}/>
               ))
            }
        </div>
   </div>
   </>
  )
}

export default Course