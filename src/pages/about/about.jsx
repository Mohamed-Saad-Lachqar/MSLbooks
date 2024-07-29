import React from 'react'
import './about.css'
import img2 from '../../assets/2.png'
export default function About() {
  return (
    <div className=" wrap flex  items-center containe min-h-[95vh] w-full">
      <img className="w-[500px] h-[500px] " src={img2} alt="#" />
      <div className="m-[30px]">
        <h1 className='text-5xl font-semibold my-[30px] '>about title </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam recusandae incidunt sint, vero repellendus ullam laborum architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis unde possimus placeat sit, debitis dolore suscipit deleniti non in amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nobis eaque ex magnam numquam sint itaque fuga adipisci blanditiis, sit quis illo iste ut corporis repellendus et? Nostrum, fugit cupiditate! reiciendis veniam accusamus harum illum, ipsam distinctio autem quis? earum, enim fugiat eos omnis ex saepe ipsam? Itaque omnis pariatur animi.</p>
      </div>
    </div>
  );
}
