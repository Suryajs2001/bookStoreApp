import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from 'react-router-dom'
export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className='flex h-screen items-center justify-center  shadow-md'>
            <div className="w-[600px] ">
                <div className="modal-box">
                    <form form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <NavLink to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</NavLink>

                        <h3 className="font-bold text-lg">Contact Us</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type="text"
                                placeholder='Enter your name'
                                className='w-80 px-3 py-1 border-rounded-md outline-none'
                                {...register("name", { required: true })}
                            />
                             <br />
                            {errors.name &&
                             ( <span className='text-sm text-red-500'>This field is required</span>)}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border-rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                              <br />
                            {errors.email &&
                             ( <span className='text-sm text-red-500'>This field is required</span>)}
                        </div>
                        {/* password */}
                        <div className='mt-4 space-y-2'>
                            <span>massage</span>
                            <br />
                            <input type="massage"
                                placeholder='Enter your massage'
                                className='w-80  px-3 py-2 border-rounded-md outline-none'
                                {...register("massage", { required: true })}

                            />
                               <br />
                            {errors.massage &&
                             ( <span className='text-sm text-red-500'>This field is required</span>)}
                        </div>
                        {/* button */}
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mr-24'>Submit</button>
                           
                      
                        </div>
                        </form> 
                </div>
            </div>
        </div>
    )
}
