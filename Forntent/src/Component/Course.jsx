import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function Course() {
    const [book, setBook]=useState([])
    useEffect(()=>{
        const getBook= async()=>{
            try{
           const res = await axios.get('http://localhost:4001/Book')
               console.log(res.data)
               setBook(res.data)
            }catch (error){
               console.log(error)
            }
        }
        getBook();
    },[])

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto mdpx-20 px-4 '>
                <div className='pt-28 item-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>We are delight to have you <span className='text-pink-500'>here!:</span> </h1>
                    <p className='mt-12'>We’re building an innovative platform that allows users to explore, share, and discover a vast collection of books. Your focus is on creating a seamless user experience, integrating advanced search capabilities, personalized recommendations, and community-driven features, all designed to connect readers with their next great read</p>
                      
                      <NavLink to='/'>
                      <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                      </NavLink>
                    
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
