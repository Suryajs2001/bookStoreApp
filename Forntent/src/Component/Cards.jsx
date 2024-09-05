import React from 'react'

export default function Cards({item}) {

  return (
   <>
   <div  className='mt-6 my-3 p-3'>
   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex  justify-between">
      <div className="badge badge-outline border-[2px]  px-4 py-4 ">${item.price}</div>
      <div className="badge badge-outline  border-[2px] hover:bg-pink-500 hover:text-white px-3 py-4   duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
   </>
  )
}
