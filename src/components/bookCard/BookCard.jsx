import React from 'react'
import { BookContext } from '../../context';

export default function BookCard(props) {
  const {id,
    title,
    authors,
    description,
    edition,
    num_pages,
    rating,
    genres,
    image_url
  }=props.data
  return (
    <div   className='shadow-2xl flex justify-center items-center flex-col p-2.5 text-center h-[350px]'>
      <img src={image_url} alt="#" className='w-[80px] h-[120px] m-[20px]' />
      <h2 className=' font-semibold my-[10px]'>{title}</h2>
      <p><span className='font-medium my-[10px]'>authors :</span>{authors}</p>
      <p><span className='font-medium my-[10px]'>number of pages :</span>{num_pages}</p>
      <p><span className='font-medium my-[10px]'>rating :</span>{rating}</p>
      
    </div>
  )
}
