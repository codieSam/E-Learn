import React from 'react'

function Cards({item}) {
// console.log(item)

  return (
    <> 
    <div className='p-2'>
    <div className="card bg-base-100 w-92 shadow-xl my-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
    className='w-80 h-72'
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer badge badge-outline bg-purple-500 text-white hover:bg-transparent hover:text-black">${item.price}</div>
      <div className="cursor-pointer rounded-full border-[2px] px-2 py-1 hover:bg-pink-500 duration-200 hover:text-white ">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards